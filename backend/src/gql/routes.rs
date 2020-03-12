use std::env;
use rocket::response::status::BadRequest;
use rocket_contrib::json::{Json, JsonValue};
use failure::*;
use graphql_client::{GraphQLQuery, Response};

type URI = String;

#[derive(GraphQLQuery)]
#[graphql(
    schema_path = "schema.public.graphql",
    query_path = "src/gql/pinned_repos.graphql",
    response_derives = "Debug",
)]
pub struct UserRepositories;

#[derive(Serialize)]
pub struct Language {
    name: String,
    color: String,
}

#[derive(Serialize)]
pub struct Repo {
    name: String,
    description: Option<String>,
    url: String,
    homepage_url: Option<String>,
    id: String,
    languages: Option<Vec<Language>>,
    license: Option<License>,
    topics: Option<Vec<Topic>>
}

#[derive(Serialize)]
pub struct RepoList {
    repos: Option<Vec<Option<Repo>>>,
    errors: Option<Vec<String>>,
}

#[derive(Serialize)]
pub struct License {
    name: String,
    nickname: Option<String>,
    url: Option<String>,
}

#[derive(Serialize)]
pub struct Topic {
    name: String,
    url: String,
}

#[get("/pinned_repos")]
pub fn pinned_repos() -> Json<RepoList> {
    let request_body = UserRepositories::build_query(user_repositories::Variables {});

    //let config: Env = envy::from_env().context("while reading from environment")?;
    //
    let key = "GITHUB_KEY";
    let api_key = match env::var(key) {
        Ok(val) => val,
        Err(e) => return Json(RepoList {
            repos: None,
            errors: Some(vec!["GITHUB_KEY is not defined!".to_string()]),
        }),
    };

    let client = reqwest::Client::new();
    let mut res = match client
        .post("https://api.github.com/graphql")
        .bearer_auth(api_key)
        .json(&request_body)
        .send() {
            Ok(good_res) => good_res,
            Err(e) => return Json(RepoList {
                repos: None,
                errors: Some(vec!["Unable to perform request".to_string()]),
            }),
        };

    let response_body = match res.json::<Response<user_repositories::ResponseData>>() {
        Ok(good_body) => good_body,
        Err(e) => return Json(RepoList {
            repos: None,
            errors: Some(vec!["Failure to get json body".to_string()]),
        }),
    };

    match response_body.errors {
        Some(_errors) => Json(RepoList {
            repos: None,
            errors: None,//Some(errors),
        }),
        None => {
            let resp = match response_body.data {
                Some(data) => match data.user {
                    Some(user) => match user.pinned_items.nodes {
                        Some(pinned_repos) => {
                            println!("{:#?}", pinned_repos);
                            let converted_repos: Vec<Option<Repo>> = pinned_repos
                                .iter()
                                .map(map_repositories)
                                .collect();
                            RepoList {
                                repos: Some(converted_repos),
                                errors: None,
                            }
                        },
                        None => RepoList { repos: None, errors: Some(vec!["NO PINNED ITEMS".to_string()]) },
                    },
                    None => RepoList { repos: None, errors: Some(vec!["NO USER".to_string()]) },
                },
                None => RepoList { repos: None, errors: Some(vec!["NO DATA".to_string()]) },
            };
            Json(resp)
        },
    }
}

fn map_repositories(o_thing: &Option<user_repositories::UserRepositoriesUserPinnedItemsNodes>) -> Option<Repo> {
    match o_thing {
        None => None,
        Some(pinned_item) => match pinned_item {
            user_repositories::UserRepositoriesUserPinnedItemsNodes::Gist => None,
            user_repositories::UserRepositoriesUserPinnedItemsNodes::Repository(repo) => Some(Repo {
                name: repo.name.clone(),
                description: repo.description.clone(),
                url: repo.url.clone(),
                homepage_url: repo.homepage_url.clone(),
                id: repo.id.clone(),
                languages: match &repo.languages {
                    Some(languages) => match &languages.nodes {
                        Some(nodes) => nodes.iter().map(map_languages).collect(),
                        None => None,
                    },
                    None => None,
                },
                license: match &repo.license_info {
                    Some(info) => Some(License {
                        name: info.name.clone(),
                        nickname: info.nickname.clone(),
                        url: info.url.clone(),
                    }),
                    None => None,
                },
                topics: match &repo.repository_topics.nodes {
                    Some(nodes) => nodes.iter().map(map_topics).collect(),
                    None => None,
                },
            }),
        },
    }
}

fn map_languages(o_lang: &Option<user_repositories::UserRepositoriesUserPinnedItemsNodesOnRepositoryLanguagesNodes>) -> Option<Language> {
    match o_lang {
        None => None,
        Some(lang) => Some(Language {
            name: lang.name.clone(),
            color: lang.color.clone().unwrap_or("#ffffff".to_string()),
        })
    }
}

fn map_topics(o_topic: &Option<user_repositories::UserRepositoriesUserPinnedItemsNodesOnRepositoryRepositoryTopicsNodes>) -> Option<Topic> {
    match o_topic {
        None => None,
        Some(node) => Some(Topic {
            name: node.topic.name.clone(),
            url: node.url.clone(),
        })
    }
}
