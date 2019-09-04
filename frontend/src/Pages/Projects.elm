module Pages.Projects exposing (..)

import Bulma.Elements exposing (..)
import Bulma.Layout exposing (tile)
import Bulma.Modifiers exposing (Width(..))
import Html exposing (Html, div, h2, h3, hr, text)
import Html.Attributes exposing (class)
import Model exposing (Model, Msg)
import Pages.Projects.ProjectRow


view : Model -> List (Html Msg)
view model =
    let
        projects =
            case model.projects of
                [] ->
                    [ text "No projects found." ]

                foundProjects ->
                    foundProjects
                        |> List.map Pages.Projects.ProjectRow.view
                        |> tile Auto [ class "is-parent is-vertical" ]
                        |> (\t -> [ t ])
    in
    [ tile Auto
        [ class "is-ancestor is-vertical" ]
        [ tile Auto
            [ class "is-parent is-vertical" ]
            ([ title H3 [] [ text "Personal Projects" ] ] ++ projects)
        ]
    ]
