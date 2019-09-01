module Update exposing (update)

import ApiWrapper.Projects exposing (getProjectsGql)
import Http
import Model exposing (Model, Msg(..), Page(..), PinnedRepository)
import RemoteData exposing (RemoteData(..))


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    let
        m =
            Debug.log "model before update" model
    in
    case Debug.log "next message" msg of
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
                            getProjectsGql

                        _ ->
                            Cmd.none
            in
            ( { loadingModel | page = page }, cmd )

        FetchProjectsGql res ->
            case res of
                NotAsked ->
                    ( model, Cmd.none )

                Loading ->
                    ( { model | error = Nothing, loading = True }, Cmd.none )

                Failure e ->
                    ( { model | error = Just "no user", loading = False }, Cmd.none )

                Success maybeFilledResponse ->
                    handleSuccess model maybeFilledResponse


handleSuccess : Model -> Maybe (Maybe (List (Maybe PinnedRepository))) -> ( Model, Cmd Msg )
handleSuccess model maybeFilledResponse =
    case maybeFilledResponse of
        Nothing ->
            ( { model | error = Just "Couldn't find user `milogert`.", loading = False }, Cmd.none )

        Just mRepos ->
            let
                repos =
                    mRepos
                        |> Maybe.withDefault []
            in
            ( { model | projects = Maybe.withDefault [] mRepos, error = Nothing, loading = False }, Cmd.none )


handleHttpError : Http.Error -> String
handleHttpError err =
    case err of
        Http.BadUrl e ->
            "Bad Url: " ++ e

        Http.Timeout ->
            "Timeout"

        Http.NetworkError ->
            "Network Error"

        Http.BadStatus i ->
            "Bad Status: " ++ String.fromInt i

        Http.BadBody e ->
            "Bad Body: " ++ e
