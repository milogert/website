-- Do not manually edit this file, it was auto-generated by dillonkearns/elm-graphql
-- https://github.com/dillonkearns/elm-graphql


module GitHub.Enum.ReportedContentClassifiers exposing (..)

import Json.Decode as Decode exposing (Decoder)


{-| The reasons a piece of content can be reported or minimized.

  - Spam - A spammy piece of content
  - Abuse - An abusive or harassing piece of content
  - OffTopic - An irrelevant piece of content
  - Outdated - An outdated piece of content
  - Resolved - The content has been resolved

-}
type ReportedContentClassifiers
    = Spam
    | Abuse
    | OffTopic
    | Outdated
    | Resolved


list : List ReportedContentClassifiers
list =
    [ Spam, Abuse, OffTopic, Outdated, Resolved ]


decoder : Decoder ReportedContentClassifiers
decoder =
    Decode.string
        |> Decode.andThen
            (\string ->
                case string of
                    "SPAM" ->
                        Decode.succeed Spam

                    "ABUSE" ->
                        Decode.succeed Abuse

                    "OFF_TOPIC" ->
                        Decode.succeed OffTopic

                    "OUTDATED" ->
                        Decode.succeed Outdated

                    "RESOLVED" ->
                        Decode.succeed Resolved

                    _ ->
                        Decode.fail ("Invalid ReportedContentClassifiers type, " ++ string ++ " try re-running the @dillonkearns/elm-graphql CLI ")
            )


{-| Convert from the union type representating the Enum to a string that the GraphQL server will recognize.
-}
toString : ReportedContentClassifiers -> String
toString enum =
    case enum of
        Spam ->
            "SPAM"

        Abuse ->
            "ABUSE"

        OffTopic ->
            "OFF_TOPIC"

        Outdated ->
            "OUTDATED"

        Resolved ->
            "RESOLVED"


{-| Convert from a String representation to an elm representation enum.
This is the inverse of the Enum `toString` function. So you can call `toString` and then convert back `fromString` safely.

    Swapi.Enum.Episode.NewHope
        |> Swapi.Enum.Episode.toString
        |> Swapi.Enum.Episode.fromString
        == Just NewHope

This can be useful for generating Strings to use for <select> menus to check which item was selected.

-}
fromString : String -> Maybe ReportedContentClassifiers
fromString enumString =
    case enumString of
        "SPAM" ->
            Just Spam

        "ABUSE" ->
            Just Abuse

        "OFF_TOPIC" ->
            Just OffTopic

        "OUTDATED" ->
            Just Outdated

        "RESOLVED" ->
            Just Resolved

        _ ->
            Nothing
