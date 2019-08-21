-- Do not manually edit this file, it was auto-generated by dillonkearns/elm-graphql
-- https://github.com/dillonkearns/elm-graphql


module GitHub.Interface.Sponsorable exposing (..)

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
import Graphql.SelectionSet exposing (FragmentSelectionSet(..), SelectionSet(..))
import Json.Decode as Decode


type alias Fragments decodesTo =
    { onUser : SelectionSet decodesTo GitHub.Object.User
    }


{-| Build an exhaustive selection of type-specific fragments.
-}
fragments :
    Fragments decodesTo
    -> SelectionSet decodesTo GitHub.Interface.Sponsorable
fragments selections =
    Object.exhuastiveFragmentSelection
        [ Object.buildFragment "User" selections.onUser
        ]


{-| Can be used to create a non-exhuastive set of fragments by using the record
update syntax to add `SelectionSet`s for the types you want to handle.
-}
maybeFragments : Fragments (Maybe decodesTo)
maybeFragments =
    { onUser = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    }


type alias SponsorshipsAsMaintainerOptionalArguments =
    { after : OptionalArgument String
    , before : OptionalArgument String
    , first : OptionalArgument Int
    , last : OptionalArgument Int
    , includePrivate : OptionalArgument Bool
    , orderBy : OptionalArgument GitHub.InputObject.SponsorshipOrder
    }


{-| This object's sponsorships as the maintainer.

  - after - Returns the elements in the list that come after the specified cursor.
  - before - Returns the elements in the list that come before the specified cursor.
  - first - Returns the first _n_ elements from the list.
  - last - Returns the last _n_ elements from the list.
  - includePrivate - Whether or not to include private sponsorships in the result set
  - orderBy - Ordering options for sponsorships returned from this connection. If left blank, the sponsorships will be ordered based on relevancy to the viewer.

-}
sponsorshipsAsMaintainer : (SponsorshipsAsMaintainerOptionalArguments -> SponsorshipsAsMaintainerOptionalArguments) -> SelectionSet decodesTo GitHub.Object.SponsorshipConnection -> SelectionSet decodesTo GitHub.Interface.Sponsorable
sponsorshipsAsMaintainer fillInOptionals object_ =
    let
        filledInOptionals =
            fillInOptionals { after = Absent, before = Absent, first = Absent, last = Absent, includePrivate = Absent, orderBy = Absent }

        optionalArgs =
            [ Argument.optional "after" filledInOptionals.after Encode.string, Argument.optional "before" filledInOptionals.before Encode.string, Argument.optional "first" filledInOptionals.first Encode.int, Argument.optional "last" filledInOptionals.last Encode.int, Argument.optional "includePrivate" filledInOptionals.includePrivate Encode.bool, Argument.optional "orderBy" filledInOptionals.orderBy GitHub.InputObject.encodeSponsorshipOrder ]
                |> List.filterMap identity
    in
    Object.selectionForCompositeField "sponsorshipsAsMaintainer" optionalArgs object_ identity


type alias SponsorshipsAsSponsorOptionalArguments =
    { after : OptionalArgument String
    , before : OptionalArgument String
    , first : OptionalArgument Int
    , last : OptionalArgument Int
    , orderBy : OptionalArgument GitHub.InputObject.SponsorshipOrder
    }


{-| This object's sponsorships as the sponsor.

  - after - Returns the elements in the list that come after the specified cursor.
  - before - Returns the elements in the list that come before the specified cursor.
  - first - Returns the first _n_ elements from the list.
  - last - Returns the last _n_ elements from the list.
  - orderBy - Ordering options for sponsorships returned from this connection. If left blank, the sponsorships will be ordered based on relevancy to the viewer.

-}
sponsorshipsAsSponsor : (SponsorshipsAsSponsorOptionalArguments -> SponsorshipsAsSponsorOptionalArguments) -> SelectionSet decodesTo GitHub.Object.SponsorshipConnection -> SelectionSet decodesTo GitHub.Interface.Sponsorable
sponsorshipsAsSponsor fillInOptionals object_ =
    let
        filledInOptionals =
            fillInOptionals { after = Absent, before = Absent, first = Absent, last = Absent, orderBy = Absent }

        optionalArgs =
            [ Argument.optional "after" filledInOptionals.after Encode.string, Argument.optional "before" filledInOptionals.before Encode.string, Argument.optional "first" filledInOptionals.first Encode.int, Argument.optional "last" filledInOptionals.last Encode.int, Argument.optional "orderBy" filledInOptionals.orderBy GitHub.InputObject.encodeSponsorshipOrder ]
                |> List.filterMap identity
    in
    Object.selectionForCompositeField "sponsorshipsAsSponsor" optionalArgs object_ identity
