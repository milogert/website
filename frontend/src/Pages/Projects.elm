module Pages.Projects exposing (..)

import Bulma.Elements exposing (..)
import Bulma.Layout exposing (tile)
import Bulma.Modifiers exposing (Width(..))
import Html exposing (Html, div, h2, h3, text)
import Html.Attributes exposing (class)
import Model exposing (Model, Msg, Project)
import Pages.Projects.ProjectRow


view : Model -> List (Html Msg)
view model =
    [ tile Auto
        [ class "is-ancestor is-vertical" ]
        [ tile Auto
            [ class "is-parent is-vertical" ]
            ([ title H3 [] [ text "Personal Projects" ] ]
                ++ (model.projects
                        |> List.filter (\p -> not <| forkFilter p)
                        |> List.map Pages.Projects.ProjectRow.view
                        |> tile Auto [ class "is-parent is-vertical" ]
                        |> (\t -> [ t ])
                   )
            )
        , tile Auto
            [ class "is-parent is-vertical" ]
            ([ title H3 [] [ text "Forked Projects" ] ]
                ++ (model.projects
                        |> List.filter forkFilter
                        |> List.map Pages.Projects.ProjectRow.view
                        |> tile Auto [ class "is-parent is-vertical" ]
                        |> (\t -> [ t ])
                   )
            )
        ]
    ]


forkFilter : Project -> Bool
forkFilter project =
    project.fork
