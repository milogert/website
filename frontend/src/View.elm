module View exposing (view)

import Bulma.CDN exposing (..)
import Bulma.Components exposing (navbar, navbarEnd, navbarItem, navbarItemLink, navbarModifiers, navbarStart)
import Bulma.Elements exposing (..)
import Bulma.Layout exposing (..)
import Bulma.Modifiers exposing (..)
import FontAwesome.Attributes as Icon
import FontAwesome.Brands as Icon
import FontAwesome.Icon as Icon exposing (Icon)
import FontAwesome.Layering as Icon
import FontAwesome.Solid as Icon
import FontAwesome.Styles as Icon
import FontAwesome.Transforms as Icon
import Html exposing (Html, a, h1, img, main_, p, text)
import Html.Attributes exposing (class, href, src, style)
import Html.Events exposing (onClick)
import Model exposing (Model, Msg(..), Page(..))
import Pages.Home
import Pages.Projects


view : Model -> Html Msg
view model =
    main_ [ style "padding-x" "2rem" ]
        [ stylesheet
        , Icon.css
        , renderHero model

        --        , renderNav model
        , loader model.loading
        , error model.error
        , body model
        , footer_
        ]


renderHero : Model -> Hero Msg
renderHero model =
    hero { heroModifiers | size = Small, color = Warning, bold = True }
        []
        [ heroHead []
            [ renderNav model ]
        , heroBody []
            [ container []
                [ title H1 [] [ text "Milo Gertjejansen" ]
                , subtitle H2 [] [ text "programming, board games, etc" ]
                ]
            ]
        ]


renderNav : Model -> Html Msg
renderNav model =
    navbar navbarModifiers
        []
        [ navbarStart []
            [ navbarItemLink (model.page == Home) [ onClick <| Nav Home ] [ text "Home" ]
            , navbarItemLink (model.page == Projects) [ onClick <| Nav Projects ] [ text "Projects" ]
            ]
        , navbarEnd []
            [ buttons Right
                []
                [ navbarItem False
                    []
                    [ a
                        [ class "button is-outline"
                        , href "https://github.com/milogert"
                        ]
                        [ Icon.github |> Icon.viewStyled [ style "margin-right" ".5em"]
                        , text " My Github"
                        ]
                    ]
                , navbarItem False
                    []
                    [ a
                        [ class "button is-outline"
                        , href "https://linkedin.com/in/milogert"
                        ]
                        [ Icon.linkedin |> Icon.viewStyled [ style "margin-right" ".5em"]
                        , text "My LinkedIn"
                        ]
                    ]
                ]
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
    section NotSpaced
        []
        [ container [] page
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
