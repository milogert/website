module Decoder exposing (reposDecoder, screenshotsDecoder)

import Gallery
import Json.Decode as Decode exposing (Decoder, field, list, nullable, string)
import Json.Decode.Pipeline exposing (hardcoded, optional, required)
import Model exposing (Language, License, PinnedRepo, Topic)


reposDecoder : Decoder (List PinnedRepo)
reposDecoder =
    field "repos" (list repoDecoder)


repoDecoder : Decoder PinnedRepo
repoDecoder =
    Decode.succeed PinnedRepo
        |> required "name" string
        |> required "description" (nullable string)
        |> optional "url" string "asdfasdf"
        |> required "homepage_url" (nullable string)
        |> required "languages" (nullable (list languageDecoder))
        |> required "license" (nullable licenseDecoder)
        |> required "topics" (nullable (list topicDecoder))
        |> hardcoded Nothing
        |> hardcoded []


languageDecoder : Decoder Language
languageDecoder =
    Decode.succeed Language
        |> required "name" string
        |> required "color" string


licenseDecoder : Decoder License
licenseDecoder =
    Decode.succeed License
        |> required "name" string
        |> required "nickname" (nullable string)
        |> required "url" (nullable string)


topicDecoder : Decoder Topic
topicDecoder =
    Decode.succeed Topic
        |> required "name" string
        |> required "url" string


screenshotsDecoder : Decoder (List String)
screenshotsDecoder =
    list screenshotDecoder


screenshotDecoder : Decoder String
screenshotDecoder =
    field "download_url" string
