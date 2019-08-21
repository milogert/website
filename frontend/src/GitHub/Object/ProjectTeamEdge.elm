-- Do not manually edit this file, it was auto-generated by dillonkearns/elm-graphql
-- https://github.com/dillonkearns/elm-graphql


module GitHub.Object.ProjectTeamEdge exposing (..)

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
cursor : SelectionSet String GitHub.Object.ProjectTeamEdge
cursor =
    Object.selectionForField "String" "cursor" [] Decode.string


{-| The item at the end of the edge.
-}
node : SelectionSet decodesTo GitHub.Object.Team -> SelectionSet (Maybe decodesTo) GitHub.Object.ProjectTeamEdge
node object_ =
    Object.selectionForCompositeField "node" [] object_ (identity >> Decode.nullable)


{-| The HTTP path for this project's team
-}
projectTeamResourcePath : SelectionSet GitHub.ScalarCodecs.Uri GitHub.Object.ProjectTeamEdge
projectTeamResourcePath =
    Object.selectionForField "ScalarCodecs.Uri" "projectTeamResourcePath" [] (GitHub.ScalarCodecs.codecs |> GitHub.Scalar.unwrapCodecs |> .codecUri |> .decoder)


{-| The HTTP URL for this project's team
-}
projectTeamUrl : SelectionSet GitHub.ScalarCodecs.Uri GitHub.Object.ProjectTeamEdge
projectTeamUrl =
    Object.selectionForField "ScalarCodecs.Uri" "projectTeamUrl" [] (GitHub.ScalarCodecs.codecs |> GitHub.Scalar.unwrapCodecs |> .codecUri |> .decoder)
