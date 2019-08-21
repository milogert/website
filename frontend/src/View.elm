module View exposing (view)

import Bulma.CDN exposing (..)
import Bulma.Components exposing (navbar, navbarEnd, navbarItemLink, navbarModifiers, navbarStart)
import Bulma.Elements exposing (..)
import Bulma.Layout exposing (..)
import Bulma.Modifiers exposing (..)
import Html exposing (Html, h1, img, main_, p, text)
import Html.Attributes exposing (src, style)
import Html.Events exposing (onClick)
import Model exposing (Model, Msg(..), Page(..))
import Pages.Home
import Pages.Projects


view : Model -> Html Msg
view model =
    main_ [ style "padding-x" "2rem" ]
        [ stylesheet
        , exampleHero
        , sideNav model
        , loader model.loading
        , error model.error
        , body model
        , footer_
        ]


sideNav : Model -> Html Msg
sideNav model =
    navbar navbarModifiers
        []
        [ navbarStart []
            [ navbarItemLink (model.page == Home) [ onClick <| Nav Home ] [ text "Home" ]
            , navbarItemLink (model.page == Projects) [ onClick <| Nav Projects ] [ text "Projects" ]
            ]
        , navbarEnd []
            [ navbarItemLink False [] [ text "githubicon" ]
            , navbarItemLink False [] [ text "linkedinicon" ]
            ]
        ]


loader : Bool -> Html Msg
loader isLoading =
    let
        disp =
            case isLoading of
                True ->
                    Block

                False ->
                    Hidden
    in
    section NotSpaced [ display disp ] [ container [] [ text "LOADING" ] ]


error : Maybe String -> Html Msg
error mErr =
    let
        disp =
            case mErr of
                Just _ ->
                    Block

                Nothing ->
                    Hidden

        e =
            case mErr of
                Just err ->
                    notification Danger
                        []
                        [ text err ]

                Nothing ->
                    text ""
    in
    section NotSpaced [ display disp ] [ e ]


body : Model -> Html Msg
body model =
    let
        page =
            case model.page of
                Home ->
                    Pages.Home.view model

                Projects ->
                    Pages.Projects.view model
    in
    container [] page


exampleHero : Html msg
exampleHero =
    hero { heroModifiers | size = Small, color = Dark }
        []
        [ heroBody []
            [ container []
                [ title H1 [] [ text "Milo Gertjejansen" ]

                --                , title H2 [] [ text "Hero Subtitle" ]
                ]
            ]
        ]


footer_ : Html Msg
footer_ =
    footer []
        [ level []
            [ levelLeft []
                [ easyLevelItemWithHeading []
                    "Email"
                    "milo@milogert.com"
                ]
            , levelRight [] [ levelItemText [] [ text "whatever" ] ]
            ]
        ]
