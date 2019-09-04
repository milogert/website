module Pages.Projects.ProjectRow exposing (..)

import Bulma.Columns as BulCol exposing (columnModifiers)
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
import GitHub.Scalar exposing (Uri(..))
import Html exposing (Html, a, div, small, text, p)
import Html.Attributes exposing (class, href, style)
import Model exposing (Msg, MyLanguage, MyRepoTopic, PinnedRepository)


view : Maybe PinnedRepository -> Tile Msg
view mProject =
    case mProject of
        Nothing ->
            text "none project"

        Just project ->
            let
                repoLink =
                    case project.url of
                        Uri url ->
                            a [ href url ] [ icon Medium [] [ Icon.github |> Icon.present |> Icon.view ] ]

                homeLink =
                    case project.homepageUrl of
                        Nothing ->
                            icon Medium [] [ Icon.unlink |> Icon.present |> Icon.view ]

                        Just (Uri homepageUrl) ->
                            a [ href homepageUrl ] [ icon Medium [] [ Icon.link |> Icon.present |> Icon.view ] ]
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
                    [ tags [] (project.topics |> renderTopics)
                    , p []
                        [ text <| Maybe.withDefault "No description provided." project.description ]
                    ]
                ]


renderTopics : Maybe (List (Maybe MyRepoTopic)) -> List (Html Msg)
renderTopics mRepoTopics =
    case mRepoTopics of
        Just repoTopics ->
            repoTopics
                |> List.map
                    (\mRepoTopic ->
                        case mRepoTopic of
                            Just repoTopic ->
                                tag tagModifiers [] [ text repoTopic.topic.name ]

                            Nothing ->
                                text ""
                    )

        Nothing ->
            []


renderLanguages : Maybe (Maybe (List (Maybe MyLanguage))) -> Html Msg
renderLanguages mmLanguages =
    case mmLanguages of
        Just mLanguages ->
            case mLanguages of
                Just languages ->
                    languages -- TODO sorting
                        |> List.map renderLanguage
                        |> (++) [ tag tagModifiers [] [ text "languages" ] ]
                        |> multitag []

                Nothing ->
                    text ""

        Nothing ->
            text ""


renderLanguage : Maybe MyLanguage -> Html Msg
renderLanguage mLanguage =
    case mLanguage of
        Just language ->
            let
                color =
                    Maybe.withDefault "#363636" language.color
            in
            tag tagModifiers [ style "background-color" color ] [ text language.name ]

        Nothing ->
            text ""
