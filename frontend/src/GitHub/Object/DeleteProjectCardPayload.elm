-- Do not manually edit this file, it was auto-generated by dillonkearns/elm-graphql
-- https://github.com/dillonkearns/elm-graphql


module GitHub.Object.DeleteProjectCardPayload exposing (..)

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


{-| A unique identifier for the client performing the mutation.
-}
clientMutationId : SelectionSet (Maybe String) GitHub.Object.DeleteProjectCardPayload
clientMutationId =
    Object.selectionForField "(Maybe String)" "clientMutationId" [] (Decode.string |> Decode.nullable)


{-| The column the deleted card was in.
-}
column : SelectionSet decodesTo GitHub.Object.ProjectColumn -> SelectionSet (Maybe decodesTo) GitHub.Object.DeleteProjectCardPayload
column object_ =
    Object.selectionForCompositeField "column" [] object_ (identity >> Decode.nullable)


{-| The deleted card ID.
-}
deletedCardId : SelectionSet (Maybe GitHub.ScalarCodecs.Id) GitHub.Object.DeleteProjectCardPayload
deletedCardId =
    Object.selectionForField "(Maybe ScalarCodecs.Id)" "deletedCardId" [] (GitHub.ScalarCodecs.codecs |> GitHub.Scalar.unwrapCodecs |> .codecId |> .decoder |> Decode.nullable)
