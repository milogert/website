pub struct UserRepositories ;
pub mod user_repositories {
    #![ allow ( dead_code ) ]
    pub const OPERATION_NAME : & 'static str = "UserRepositories" ;
    pub const QUERY : & 'static str = "query UserRepositories {\n  user(login: \"milogert\") {\n    pinnedItems(first: 5) {\n      nodes {\n        __typename\n        ... on Repository {\n          name\n          description\n          homepageUrl\n          id\n          languages(first: 5, orderBy: {field: SIZE, direction: DESC}) {\n            nodes {\n              color\n              name\n            }\n          }\n          licenseInfo {\n            id\n          }\n          url\n        }\n      }\n    }\n  }\n}\n\n" ;
    use serde::{ Serialize , Deserialize } ;
    #[ allow ( dead_code ) ] type Boolean = bool ;
    #[ allow ( dead_code ) ] type Float = f64 ;
    #[ allow ( dead_code ) ] type Int = i64 ;
    #[ allow ( dead_code ) ] type ID = String ;
    #[ doc = "An RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string.\n" ] type URI = super :: URI ;

    #[ derive ( Deserialize ) ]
    #[ doc = "Represents a given language found in repositories.\n" ]
    pub struct UserRepositoriesUserPinnedItemsNodesOnRepositoryLanguagesNodes {
        # [ doc = "The color defined for the current language.\n" ]
        pub color : Option < String > ,

        # [ doc = "The name of the current language.\n" ]
        pub name : String ,
    }

    #[ derive ( Deserialize ) ]
    #[ doc = "A list of languages associated with the parent.\n" ]
    pub struct UserRepositoriesUserPinnedItemsNodesOnRepositoryLanguages {
        # [ doc = "A list of nodes.\n" ]
        pub nodes : Option < Vec < Option < UserRepositoriesUserPinnedItemsNodesOnRepositoryLanguagesNodes > > > ,
    }

    #[ derive ( Deserialize ) ]
    #[ doc = "A repository's open source license\n" ]
    pub struct UserRepositoriesUserPinnedItemsNodesOnRepositoryLicenseInfo { pub id : ID , }

    #[ derive ( Deserialize ) ]
    #[ doc = "A repository contains the content for a project.\n" ]
    pub struct UserRepositoriesUserPinnedItemsNodesOnRepository {
        #[ doc = "The name of the repository.\n" ]
        pub name : String ,

        #[ doc = "The description of the repository.\n" ]
        pub description : Option < String > ,

        #[ doc = "The repository's URL.\n" ]
        #[ serde ( rename = "homepageUrl" ) ]
        pub homepage_url : Option < URI > ,

        pub id : ID ,

        #[ doc = "A list containing a breakdown of the language composition of the repository.\n" ]
        pub languages : Option < UserRepositoriesUserPinnedItemsNodesOnRepositoryLanguages > , 

        #[ doc = "The license associated with the repository\n" ] 
        #[ serde ( rename = "licenseInfo" ) ]
        pub license_info : Option < UserRepositoriesUserPinnedItemsNodesOnRepositoryLicenseInfo > , 

        #[ doc = "The HTTP URL for this repository\n" ]
        pub url : URI ,
    }

    #[ derive ( Deserialize ) ] 
    #[ serde ( tag = "__typename" ) ]
    pub enum UserRepositoriesUserPinnedItemsNodes {
        Repository ( UserRepositoriesUserPinnedItemsNodesOnRepository ) , Gist
    }

    #[ derive ( Deserialize ) ] 
    #[ doc = "The connection type for PinnableItem.\n" ]
    pub struct UserRepositoriesUserPinnedItems { 
        # [ doc = "A list of nodes.\n" ]
        pub nodes : Option < Vec < Option < UserRepositoriesUserPinnedItemsNodes > > > ,
    }

    # [ derive ( Deserialize ) ] 
    # [ doc = "A user is an individual's account on GitHub that owns repositories and can make new content.\n" ]
    pub struct UserRepositoriesUser { 
        # [ doc = "A list of repositories and gists this profile owner has pinned to their profile\n" ] 
        # [ serde ( rename = "pinnedItems" ) ]
        pub pinned_items : UserRepositoriesUserPinnedItems ,
    }

    #[ derive ( Serialize ) ]
    pub struct Variables ; 

    #[ derive ( Deserialize ) ]
    pub struct ResponseData {
        #[ doc = "Lookup a user by login.\n" ]
        pub user : Option < UserRepositoriesUser > ,
    }
}
impl graphql_client :: GraphQLQuery for UserRepositories {
    type Variables = user_repositories :: Variables ;
    type ResponseData = user_repositories :: ResponseData ;
    fn build_query ( variables : Self :: Variables ) -> :: graphql_client :: QueryBody < Self :: Variables > {
        graphql_client :: QueryBody {
            variables , query : user_repositories :: QUERY , operation_name : user_repositories :: OPERATION_NAME ,
        }
    }
}
