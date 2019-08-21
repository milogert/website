-- Do not manually edit this file, it was auto-generated by dillonkearns/elm-graphql
-- https://github.com/dillonkearns/elm-graphql


module GitHub.Object.CreatedPullRequestContribution exposing (..)

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


{-| Whether this contribution is associated with a record you do not have access to. For
example, your own 'first issue' contribution may have been made on a repository you can no
longer access.
-}
isRestricted : SelectionSet Bool GitHub.Object.CreatedPullRequestContribution
isRestricted =
    Object.selectionForField "Bool" "isRestricted" [] Decode.bool


{-| When this contribution was made.
-}
occurredAt : SelectionSet GitHub.ScalarCodecs.DateTime GitHub.Object.CreatedPullRequestContribution
occurredAt =
    Object.selectionForField "ScalarCodecs.DateTime" "occurredAt" [] (GitHub.ScalarCodecs.codecs |> GitHub.Scalar.unwrapCodecs |> .codecDateTime |> .decoder)


{-| The pull request that was opened.
-}
pullRequest : SelectionSet decodesTo GitHub.Object.PullRequest -> SelectionSet decodesTo GitHub.Object.CreatedPullRequestContribution
pullRequest object_ =
    Object.selectionForCompositeField "pullRequest" [] object_ identity


{-| The HTTP path for this contribution.
-}
resourcePath : SelectionSet GitHub.ScalarCodecs.Uri GitHub.Object.CreatedPullRequestContribution
resourcePath =
    Object.selectionForField "ScalarCodecs.Uri" "resourcePath" [] (GitHub.ScalarCodecs.codecs |> GitHub.Scalar.unwrapCodecs |> .codecUri |> .decoder)


{-| The HTTP URL for this contribution.
-}
url : SelectionSet GitHub.ScalarCodecs.Uri GitHub.Object.CreatedPullRequestContribution
url =
    Object.selectionForField "ScalarCodecs.Uri" "url" [] (GitHub.ScalarCodecs.codecs |> GitHub.Scalar.unwrapCodecs |> .codecUri |> .decoder)


{-| The user who made this contribution.
-}
user : SelectionSet decodesTo GitHub.Object.User -> SelectionSet decodesTo GitHub.Object.CreatedPullRequestContribution
user object_ =
    Object.selectionForCompositeField "user" [] object_ identity
