module ApiWrapper.Projects exposing (..)

import GitHub.Interface
import GitHub.Interface.RepositoryOwner as RepositoryOwner
import GitHub.Object
import GitHub.Object.Language as Language
import GitHub.Object.LanguageConnection as LanguageConnection
import GitHub.Object.License as License
import GitHub.Object.Repository as Repository
import GitHub.Object.RepositoryConnection as RepositoryConnection
import GitHub.Object.RepositoryTopic as RepositoryTopic
import GitHub.Object.RepositoryTopicConnection as RepositoryTopicConnection
import GitHub.Object.Topic as Topic
import GitHub.Query as Query
import Graphql.Http
import Graphql.Operation exposing (RootQuery)
import Graphql.OptionalArgument exposing (OptionalArgument(..))
import Graphql.SelectionSet as SelectionSet exposing (SelectionSet, with)
import Model exposing (Msg(..), MyLanguage, MyLicense, MyRepoTopic, MyTopic, PinnedRepository)
import RemoteData exposing (RemoteData)


gqlGetProjects : SelectionSet (Maybe (Maybe (List (Maybe PinnedRepository)))) RootQuery
gqlGetProjects =
    Query.repositoryOwner { login = "milogert" } repoOwnerSelection


repoOwnerSelection : SelectionSet (Maybe (List (Maybe PinnedRepository))) GitHub.Interface.RepositoryOwner
repoOwnerSelection =
    RepositoryOwner.pinnedRepositories (\r -> { r | first = Present 6 }) pinnedRepos


pinnedRepos : SelectionSet (Maybe (List (Maybe PinnedRepository))) GitHub.Object.RepositoryConnection
pinnedRepos =
    RepositoryConnection.nodes pinnedRepo


pinnedRepo : SelectionSet PinnedRepository GitHub.Object.Repository
pinnedRepo =
    SelectionSet.succeed PinnedRepository
        |> with Repository.name
        |> with Repository.description
        |> with Repository.url
        |> with Repository.homepageUrl
        |> with (Repository.languages (\l -> { l | first = Present 15 }) languages)
        |> with (Repository.licenseInfo license)
        |> with (Repository.repositoryTopics (\t -> { t | first = Present 6 }) repoTopics)


languages : SelectionSet (Maybe (List (Maybe MyLanguage))) GitHub.Object.LanguageConnection
languages =
    LanguageConnection.nodes language


language : SelectionSet MyLanguage GitHub.Object.Language
language =
    SelectionSet.succeed MyLanguage
        |> with Language.name
        |> with Language.color


license : SelectionSet MyLicense GitHub.Object.License
license =
    SelectionSet.succeed MyLicense
        |> with License.name


repoTopics : SelectionSet (Maybe (List (Maybe MyRepoTopic))) GitHub.Object.RepositoryTopicConnection
repoTopics =
    RepositoryTopicConnection.nodes repoTopic


repoTopic : SelectionSet MyRepoTopic GitHub.Object.RepositoryTopic
repoTopic =
    SelectionSet.succeed MyRepoTopic
        |> with (RepositoryTopic.topic topic)


topic : SelectionSet MyTopic GitHub.Object.Topic
topic =
    SelectionSet.succeed MyTopic
        |> with Topic.name


getProjectsGql : Cmd Msg
getProjectsGql =
    gqlGetProjects
        |> Graphql.Http.queryRequest "https://api.github.com/graphql"
        |> Graphql.Http.withHeader "Authorization" "Bearer REDACTED"
        |> Graphql.Http.send (RemoteData.fromResult >> FetchProjectsGql)
