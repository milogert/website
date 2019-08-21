module Pages.Home exposing (..)

import Html exposing (Html, div, text)
import Model exposing (Model, Msg)


view : Model -> List (Html Msg)
view model =
    [ text "HOME" ]
