-- Do not manually edit this file, it was auto-generated by dillonkearns/elm-graphql
-- https://github.com/dillonkearns/elm-graphql


module GitHub.Object.StargazerEdge exposing (..)

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


{-| A cursor for use in pagination.
-}
cursor : SelectionSet String GitHub.Object.StargazerEdge
cursor =
    Object.selectionForField "String" "cursor" [] Decode.string


node : SelectionSet decodesTo GitHub.Object.User -> SelectionSet decodesTo GitHub.Object.StargazerEdge
node object_ =
    Object.selectionForCompositeField "node" [] object_ identity


{-| Identifies when the item was starred.
-}
starredAt : SelectionSet GitHub.ScalarCodecs.DateTime GitHub.Object.StargazerEdge
starredAt =
    Object.selectionForField "ScalarCodecs.DateTime" "starredAt" [] (GitHub.ScalarCodecs.codecs |> GitHub.Scalar.unwrapCodecs |> .codecDateTime |> .decoder)
