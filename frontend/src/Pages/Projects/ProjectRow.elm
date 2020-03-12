module Pages.Projects.ProjectRow exposing (..)

import Bulma.Components exposing (..)
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
import Html exposing (Html, a, div, p, small, span, text)
import Html.Attributes exposing (class, href, style)
import Model exposing (Language, Model, Msg, PinnedRepo, Topic)
import Pages.Projects.ImageGallery as ImageGallery


view : Model -> PinnedRepo -> Tile Msg
view model project =
    let
        repoLink =
            a [ href project.url ]
                [ icon Medium
                    []
                    [ Icon.github |> Icon.present |> Icon.view ]
                ]

        homeLink =
            case project.homepageUrl of
                Nothing ->
                    icon Medium [] [ Icon.unlink |> Icon.present |> Icon.view ]

                Just homepageUrl ->
                    a [ href homepageUrl ]
                        [ icon Medium
                            []
                            [ Icon.link |> Icon.present |> Icon.view ]
                        ]

        licenseLink =
            case project.license of
                Nothing ->
                    span [] [ text "No license" ]

                Just license ->
                    case license.url of
                        Nothing ->
                            span [] [ text license.name ]

                        Just url ->
                            a [ href url ] [ text license.name ]

        gallery =
            case project.gallery of
                Nothing ->
                    span [] []

                Just _ ->
                    div
                        [ class "image-gallery-holder"
                        , style "display" "flex"
                        , style "justify-content" "center"
                        ]
                        [ ImageGallery.render project ]
    in
    tile Auto
        [ class "is-child box" ]
        [ level []
            [ levelLeft []
                [ title H5
                    []
                    [ text project.name
                    , repoLink
                    , homeLink
                    ]
                ]
            , levelRight []
                [ subtitle H5
                    []
                    [ renderLanguages project.languages ]
                ]
            ]
        , content Standard
            []
            [ p []
                [ text <| Maybe.withDefault "No description provided." project.description ]
            , gallery
            ]
        , level []
            [ levelLeft [] [ tags [] (project.topics |> renderTopics) ]
            , levelRight [] [ licenseLink ]
            ]
        ]


renderTopics : Maybe (List Topic) -> List (Html Msg)
renderTopics mTopics =
    case mTopics of
        Just topics ->
            case topics of
                [] ->
                    [ text "No topics are set" ]

                _ ->
                    topics
                        |> List.map
                            (\topic ->
                                tag tagModifiers [] [ text topic.name ]
                            )

        Nothing ->
            [ text "No topics were found" ]


renderLanguages : Maybe (List Language) -> Html Msg
renderLanguages mLanguages =
    case mLanguages of
        Just languages ->
            languages
                |> List.map renderLanguage
                |> (++) [ tag tagModifiers [] [ text "languages" ] ]
                |> multitag []

        Nothing ->
            text ""


renderLanguage : Language -> Html Msg
renderLanguage language =
    tag tagModifiers
        [ style "background-color" language.color ]
        [ span
            [ class "language-text"

            --, style "filter" "invert(1) grayscale(1) contrast(9)"
            --, style "color" language.color
            ]
            [ text language.name ]
        ]
