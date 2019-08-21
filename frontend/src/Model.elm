module Model exposing (Model, Msg(..), Page(..), Project, init, FoundUser)

import Graphql.Http
import Http exposing (Response)
import RemoteData exposing (RemoteData)


type alias Model =
    { page : Page
    , projects : List Project
    , error : Maybe String
    , loading : Bool
    }


type alias Project =
    { name : String
    , description : Maybe String
    , language : Maybe String
    , html_url : String
    , homepage : Maybe String
    , license : Maybe String
    , topics : List String
    , fork : Bool
    }


init : ( Model, Cmd Msg )
init =
    ( { page = Home
      , projects = []
      , error = Nothing
      , loading = False
      }
    , Cmd.none
    )


type Page
    = Home
    | Projects


type alias FoundUser =
    { name : Maybe String
--    , pinnedItems : PinnableItemConnection
    }

type Msg
    = Nav Page
    | FetchProjects (Result Http.Error (List Project))
    | FetchProjectsGql (RemoteData (Graphql.Http.Error (Maybe FoundUser)) (Maybe FoundUser))
