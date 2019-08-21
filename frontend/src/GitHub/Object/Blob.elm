-- Do not manually edit this file, it was auto-generated by dillonkearns/elm-graphql
-- https://github.com/dillonkearns/elm-graphql


module GitHub.Object.Blob exposing (..)

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


{-| An abbreviated version of the Git object ID
-}
abbreviatedOid : SelectionSet String GitHub.Object.Blob
abbreviatedOid =
    Object.selectionForField "String" "abbreviatedOid" [] Decode.string


{-| Byte size of Blob object
-}
byteSize : SelectionSet Int GitHub.Object.Blob
byteSize =
    Object.selectionForField "Int" "byteSize" [] Decode.int


{-| The HTTP path for this Git object
-}
commitResourcePath : SelectionSet GitHub.ScalarCodecs.Uri GitHub.Object.Blob
commitResourcePath =
    Object.selectionForField "ScalarCodecs.Uri" "commitResourcePath" [] (GitHub.ScalarCodecs.codecs |> GitHub.Scalar.unwrapCodecs |> .codecUri |> .decoder)


{-| The HTTP URL for this Git object
-}
commitUrl : SelectionSet GitHub.ScalarCodecs.Uri GitHub.Object.Blob
commitUrl =
    Object.selectionForField "ScalarCodecs.Uri" "commitUrl" [] (GitHub.ScalarCodecs.codecs |> GitHub.Scalar.unwrapCodecs |> .codecUri |> .decoder)


id : SelectionSet GitHub.ScalarCodecs.Id GitHub.Object.Blob
id =
    Object.selectionForField "ScalarCodecs.Id" "id" [] (GitHub.ScalarCodecs.codecs |> GitHub.Scalar.unwrapCodecs |> .codecId |> .decoder)


{-| Indicates whether the Blob is binary or text
-}
isBinary : SelectionSet Bool GitHub.Object.Blob
isBinary =
    Object.selectionForField "Bool" "isBinary" [] Decode.bool


{-| Indicates whether the contents is truncated
-}
isTruncated : SelectionSet Bool GitHub.Object.Blob
isTruncated =
    Object.selectionForField "Bool" "isTruncated" [] Decode.bool


{-| The Git object ID
-}
oid : SelectionSet GitHub.ScalarCodecs.GitObjectID GitHub.Object.Blob
oid =
    Object.selectionForField "ScalarCodecs.GitObjectID" "oid" [] (GitHub.ScalarCodecs.codecs |> GitHub.Scalar.unwrapCodecs |> .codecGitObjectID |> .decoder)


{-| The Repository the Git object belongs to
-}
repository : SelectionSet decodesTo GitHub.Object.Repository -> SelectionSet decodesTo GitHub.Object.Blob
repository object_ =
    Object.selectionForCompositeField "repository" [] object_ identity


{-| UTF8 text data or null if the Blob is binary
-}
text : SelectionSet (Maybe String) GitHub.Object.Blob
text =
    Object.selectionForField "(Maybe String)" "text" [] (Decode.string |> Decode.nullable)
