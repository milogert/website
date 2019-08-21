module ApiWrapper.Projects exposing (..)

import Decoders exposing (decodeProjects)
import Graphql.Http
import Graphql.Operation exposing (RootQuery)
import Graphql.SelectionSet as SelectionSet exposing (SelectionSet, withDefault, with)
import GitHub.Interface
import GitHub.Interface.ProfileOwner as ProfileOwner
import GitHub.Query as Query
import GitHub.Object
import GitHub.Object.User as User
import GitHub.Object.Repository as Repository
import GitHub.Object.PinnableItemConnection as PinnableItemConnection
import Http
import Model exposing (Msg(..), FoundUser)
import RemoteData exposing (RemoteData)


getProjects : Cmd Msg
getProjects =
    Http.request
        { method = "GET"
        , headers = [ Http.header "Accept" "application/vnd.github.mercy-preview+json" ]
        , url = "https://api.github.com/users/milogert/repos"
        , body = Http.emptyBody
        , expect = Http.expectJson FetchProjects decodeProjects
        , timeout = Nothing
        , tracker = Nothing
        }


gqlGetProjects : SelectionSet (Maybe FoundUser) RootQuery
gqlGetProjects =
    Query.user  { login = "milogert" } userSelection


userSelection : SelectionSet FoundUser GitHub.Object.User
userSelection =
    SelectionSet.map FoundUser
        User.name
--        User.pinnedItems


getProjectsGql : Cmd Msg
getProjectsGql =
    gqlGetProjects
        |> Graphql.Http.queryRequest "https://api.github.com/graphql"
        |>(\query -> { headers = []
              , baseUrl = "https://api.github.com/graphql"
              , expect = Document.decoder query
              , timeout = Nothing
              , withCredentials = False
              , details = Query Nothing query
              , queryParams = []
              }
              )
        |> Graphql.Http.send (RemoteData.fromResult >> FetchProjectsGql)