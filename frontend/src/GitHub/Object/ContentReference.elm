-- Do not manually edit this file, it was auto-generated by dillonkearns/elm-graphql
-- https://github.com/dillonkearns/elm-graphql


module GitHub.Object.ContentReference exposing (..)

import GitHub.InputObject
import GitHub.Interface
import GitHub.Object
import GitHub.Scalar
import GitHub.ScalarCodecs
import GitHub.Union
import Graphql.Internal.Builder.Argument as Argument exposing (Argument)
import Graphql.Internal.Builder.Object as Object
import Graphql.Internal.Encode as Encode exposing (Value)
import Graphql.Operation exposing (RootMutation, RootQuery, RootSubscription)
import Graphql.OptionalArgument exposing (OptionalArgument(..))
import Graphql.SelectionSet exposing (SelectionSet)
import Json.Decode as Decode


{-| Identifies the primary key from the database.
-}
databaseId : SelectionSet Int GitHub.Object.ContentReference
databaseId =
    Object.selectionForField "Int" "databaseId" [] Decode.int


id : SelectionSet GitHub.ScalarCodecs.Id GitHub.Object.ContentReference
id =
    Object.selectionForField "ScalarCodecs.Id" "id" [] (GitHub.ScalarCodecs.codecs |> GitHub.Scalar.unwrapCodecs |> .codecId |> .decoder)


{-| The reference of the content reference.
-}
reference : SelectionSet String GitHub.Object.ContentReference
reference =
    Object.selectionForField "String" "reference" [] Decode.string
