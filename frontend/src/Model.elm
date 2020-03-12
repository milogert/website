module Model exposing
    ( Language
    , License
    , Model
    , Msg(..)
    , Page(..)
    , PinnedRepo
    , Topic
    , init
    )

import Gallery
import Http
import Markdown.Render exposing (MarkdownMsg(..))


type alias Model =
    { page : Page
    , projects : List PinnedRepo
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
    | Blog


type alias PinnedRepo =
    { name : String
    , description : Maybe String
    , url : String
    , homepageUrl : Maybe String
    , languages : Maybe (List Language)
    , license : Maybe License
    , topics : Maybe (List Topic)
    , gallery : Maybe Gallery.State
    , screenshots : List String
    }


type alias Language =
    { name : String
    , color : String
    }


type alias License =
    { name : String
    , nickname : Maybe String
    , url : Maybe String
    }


type alias Topic =
    { name : String
    , url : String
    }


type Msg
    = Nav Page
    | GotRepos (Result Http.Error (List PinnedRepo))
    | GotScreenshots PinnedRepo (Result Http.Error (List String))
    | ImageGalleryMsg PinnedRepo Gallery.Msg
    | MarkdownMsg Markdown.Render.MarkdownMsg
