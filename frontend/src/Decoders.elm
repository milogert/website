module Decoders exposing (..)

import Json.Decode as D
import Json.Decode.Pipeline exposing (hardcoded, optional, required)
import Model exposing (Project)


decodeProjects : D.Decoder (List Project)
decodeProjects =
    D.list
        (D.succeed Project
            |> required "name" D.string
            |> required "description" (D.nullable D.string)
            |> required "language" (D.nullable D.string)
            |> required "html_url" D.string
            |> required "homepage" (D.nullable D.string)
            |> hardcoded (Just "TODO license")
            |> optional "topics" (D.list D.string) []
            |> required "fork" D.bool
        )
