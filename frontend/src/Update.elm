module Update exposing (update)

import Decoder exposing (reposDecoder, screenshotsDecoder)
import Dict exposing (Dict)
import Gallery
import Http
import Model exposing (Model, Msg(..), Page(..), PinnedRepo)
import RemoteData exposing (RemoteData(..))


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Nav page ->
            let
                loadingModel =
                    case page of
                        Projects ->
                            { model | loading = True }

                        _ ->
                            model

                cmd =
                    case page of
                        Projects ->
                            Http.get
                                { url = "http://localhost:8000/gql/pinned_repos"
                                , expect = Http.expectJson GotRepos reposDecoder
                                }

                        _ ->
                            Cmd.none
            in
            ( { loadingModel | page = page }, cmd )

        GotRepos res ->
            case res of
                Ok repos ->
                    ( { model
                        | error = Nothing
                        , loading = False
                        , projects = repos
                      }
                    , Cmd.batch
                        (repos
                            |> List.map screenshotGetBuilder
                        )
                    )

                Err e ->
                    ( { model
                        | error = Just <| handleHttpError e
                        , loading = False
                      }
                    , Cmd.none
                    )

        GotScreenshots project res ->
            case res of
                Ok screenshots ->
                    -- Make sure to re-init gallery here with proper size
                    ( { model
                        | loading = False
                        , projects =
                            List.map
                                (updateSpecificProject
                                    { project
                                        | gallery = Just <| Gallery.init <| List.length screenshots
                                        , screenshots = screenshots
                                    }
                                )
                                model.projects
                      }
                    , Cmd.none
                    )

                Err e ->
                    ( { model | loading = False }
                    , Cmd.none
                    )

        ImageGalleryMsg project imageGalleryMsg ->
            ( { model
                | projects =
                    model.projects
                        |> List.map (updateProjectGallery imageGalleryMsg project)
              }
            , Cmd.none
            )

        MarkdownMsg mdMsg ->
            ( model, Cmd.none )


handleHttpError : Http.Error -> String
handleHttpError err =
    case err of
        Http.BadUrl e ->
            "BadUrl: " ++ e

        Http.Timeout ->
            "Timeout: Took too long to grab the pinned repositories."

        Http.NetworkError ->
            "NetworkError: Couldn't connect to the server to grab the repositories."

        Http.BadStatus i ->
            "BadStatus: " ++ String.fromInt i

        Http.BadBody e ->
            "BadBody: " ++ e


updateProjectGallery : Gallery.Msg -> PinnedRepo -> PinnedRepo -> PinnedRepo
updateProjectGallery msg needsUpdate inspecting =
    if inspecting.name == needsUpdate.name then
        case needsUpdate.gallery of
            Nothing ->
                needsUpdate

            Just gallery ->
                { needsUpdate | gallery = Just <| Gallery.update msg gallery }

    else
        inspecting


updateSpecificProject : PinnedRepo -> PinnedRepo -> PinnedRepo
updateSpecificProject needsUpdate inspecting =
    if inspecting.name == needsUpdate.name then
        needsUpdate

    else
        inspecting


screenshotGetBuilder : PinnedRepo -> Cmd Msg
screenshotGetBuilder project =
    Http.get
        { url = "https://api.github.com/repos/milogert/" ++ project.name ++ "/contents/screenshots"
        , expect = Http.expectJson (GotScreenshots project) screenshotsDecoder
        }
