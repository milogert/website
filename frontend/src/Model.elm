module Model exposing (Model, Msg(..),MyLanguage, MyLicense, MyRepoTopic, MyTopic, Page(..), PinnedRepository, init)

import GitHub.ScalarCodecs exposing (Uri)
import Graphql.Http
import RemoteData exposing (RemoteData)


type alias Model =
    { page : Page
    , projects : List (Maybe PinnedRepository)
    , error : Maybe String
    , loading : Bool
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


type alias PinnedRepository =
    { name : String
    , description : Maybe String
    , url : Uri
    , homepageUrl : Maybe Uri
    , languages : Maybe (Maybe (List (Maybe MyLanguage)))
    , licenseInfo : Maybe MyLicense
    , topics : Maybe (List (Maybe MyRepoTopic))
    }


type alias MyLanguage =
    { name : String
    , color: Maybe String
    }

type alias MyLicense =
    { name : String }


type alias MyRepoTopic =
    { topic : MyTopic }


type alias MyTopic =
    { name : String }


type Msg
    = Nav Page
    | FetchProjectsGql (RemoteData (Graphql.Http.Error (Maybe (Maybe (List (Maybe PinnedRepository))))) (Maybe (Maybe (List (Maybe PinnedRepository)))))
