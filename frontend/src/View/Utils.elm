module View.Utils exposing (loader, styling)

import Bulma.Layout exposing (..)
import Bulma.Modifiers exposing (..)
import Html exposing (Html, node, text)
import Model exposing (Msg)


loader : Bool -> Html Msg
loader isLoading =
    let
        disp =
            if isLoading then
                Block

            else
                Hidden
    in
    section NotSpaced
        [ display disp ]
        [ container [] [ text "Loading..." ] ]


styling : Html Msg
styling =
    node "style"
        []
        [ text """
            .image-galler-holder {
            }

            .language-text {
                mix-blend-mode: color-burn;
            }

            .elm-gallery-next, .elm-gallery-previous {
                mix-blend-mode: difference;
            }
        """ ]


type Shade
    = Light
    | Dark
