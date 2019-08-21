module Pages.Projects.ProjectRow exposing (..)

import Bulma.Columns as BulCol exposing (columnModifiers)
import Bulma.Components exposing (..)
import Bulma.Elements exposing (..)
import Bulma.Layout exposing (..)
import Bulma.Modifiers exposing (..)
import Html exposing (Html, a, div, small, text)
import Html.Attributes exposing (class, href)
import Model exposing (Msg, Project)


view : Project -> Tile Msg
view project =
    tile Auto
        [ class "is-child" ]
        [ level []
            [ levelLeft []
                [ title H5
                    []
                    [ a [ href project.html_url ] [ text project.name ] ]
                ]
            , levelRight []
                [ subtitle H5
                    []
                    [ multitag []
                        [ tag tagModifiers [] [ text "language" ]
                        , tag { tagModifiers | color = Dark } [] [ text <| Maybe.withDefault "None Specified" project.language ]
                        ]
                    ]
                ]
            ]
        , content Standard
            []
            [ project.topics |> List.map (\t -> tag tagModifiers [] [ text t ]) |> tags []
            , text <| Maybe.withDefault "" project.description
            ]
        ]
