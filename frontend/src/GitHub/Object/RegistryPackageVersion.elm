-- Do not manually edit this file, it was auto-generated by dillonkearns/elm-graphql
-- https://github.com/dillonkearns/elm-graphql


module GitHub.Object.RegistryPackageVersion exposing (..)

import GitHub.Enum.RegistryPackageDependencyType
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


type alias DependenciesOptionalArguments =
    { after : OptionalArgument String
    , before : OptionalArgument String
    , first : OptionalArgument Int
    , last : OptionalArgument Int
    , type_ : OptionalArgument GitHub.Enum.RegistryPackageDependencyType.RegistryPackageDependencyType
    }


{-| list of dependencies for this package

  - after - Returns the elements in the list that come after the specified cursor.
  - before - Returns the elements in the list that come before the specified cursor.
  - first - Returns the first _n_ elements from the list.
  - last - Returns the last _n_ elements from the list.
  - type\_ - Find dependencies by type.

-}
dependencies : (DependenciesOptionalArguments -> DependenciesOptionalArguments) -> SelectionSet decodesTo GitHub.Object.RegistryPackageDependencyConnection -> SelectionSet decodesTo GitHub.Object.RegistryPackageVersion
dependencies fillInOptionals object_ =
    let
        filledInOptionals =
            fillInOptionals { after = Absent, before = Absent, first = Absent, last = Absent, type_ = Absent }

        optionalArgs =
            [ Argument.optional "after" filledInOptionals.after Encode.string, Argument.optional "before" filledInOptionals.before Encode.string, Argument.optional "first" filledInOptionals.first Encode.int, Argument.optional "last" filledInOptionals.last Encode.int, Argument.optional "type" filledInOptionals.type_ (Encode.enum GitHub.Enum.RegistryPackageDependencyType.toString) ]
                |> List.filterMap identity
    in
    Object.selectionForCompositeField "dependencies" optionalArgs object_ identity


type alias FileByNameRequiredArguments =
    { filename : String }


{-| A file associated with this registry package version

  - filename - A specific file to find.

-}
fileByName : FileByNameRequiredArguments -> SelectionSet decodesTo GitHub.Object.RegistryPackageFile -> SelectionSet (Maybe decodesTo) GitHub.Object.RegistryPackageVersion
fileByName requiredArgs object_ =
    Object.selectionForCompositeField "fileByName" [ Argument.required "filename" requiredArgs.filename Encode.string ] object_ (identity >> Decode.nullable)


type alias FilesOptionalArguments =
    { after : OptionalArgument String
    , before : OptionalArgument String
    , first : OptionalArgument Int
    , last : OptionalArgument Int
    }


{-| List of files associated with this registry package version

  - after - Returns the elements in the list that come after the specified cursor.
  - before - Returns the elements in the list that come before the specified cursor.
  - first - Returns the first _n_ elements from the list.
  - last - Returns the last _n_ elements from the list.

-}
files : (FilesOptionalArguments -> FilesOptionalArguments) -> SelectionSet decodesTo GitHub.Object.RegistryPackageFileConnection -> SelectionSet decodesTo GitHub.Object.RegistryPackageVersion
files fillInOptionals object_ =
    let
        filledInOptionals =
            fillInOptionals { after = Absent, before = Absent, first = Absent, last = Absent }

        optionalArgs =
            [ Argument.optional "after" filledInOptionals.after Encode.string, Argument.optional "before" filledInOptionals.before Encode.string, Argument.optional "first" filledInOptionals.first Encode.int, Argument.optional "last" filledInOptionals.last Encode.int ]
                |> List.filterMap identity
    in
    Object.selectionForCompositeField "files" optionalArgs object_ identity


id : SelectionSet GitHub.ScalarCodecs.Id GitHub.Object.RegistryPackageVersion
id =
    Object.selectionForField "ScalarCodecs.Id" "id" [] (GitHub.ScalarCodecs.codecs |> GitHub.Scalar.unwrapCodecs |> .codecId |> .decoder)


{-| A single line of text to install this package version.
-}
installationCommand : SelectionSet (Maybe String) GitHub.Object.RegistryPackageVersion
installationCommand =
    Object.selectionForField "(Maybe String)" "installationCommand" [] (Decode.string |> Decode.nullable)


{-| Identifies the package manifest for this package version.
-}
manifest : SelectionSet (Maybe String) GitHub.Object.RegistryPackageVersion
manifest =
    Object.selectionForField "(Maybe String)" "manifest" [] (Decode.string |> Decode.nullable)


{-| Identifies the platform this version was built for.
-}
platform : SelectionSet (Maybe String) GitHub.Object.RegistryPackageVersion
platform =
    Object.selectionForField "(Maybe String)" "platform" [] (Decode.string |> Decode.nullable)


{-| The README of this package version
-}
readme : SelectionSet (Maybe String) GitHub.Object.RegistryPackageVersion
readme =
    Object.selectionForField "(Maybe String)" "readme" [] (Decode.string |> Decode.nullable)


{-| The HTML README of this package version
-}
readmeHtml : SelectionSet (Maybe GitHub.ScalarCodecs.Html) GitHub.Object.RegistryPackageVersion
readmeHtml =
    Object.selectionForField "(Maybe ScalarCodecs.Html)" "readmeHtml" [] (GitHub.ScalarCodecs.codecs |> GitHub.Scalar.unwrapCodecs |> .codecHtml |> .decoder |> Decode.nullable)


{-| Registry package associated with this version.
-}
registryPackage : SelectionSet decodesTo GitHub.Object.RegistryPackage -> SelectionSet (Maybe decodesTo) GitHub.Object.RegistryPackageVersion
registryPackage object_ =
    Object.selectionForCompositeField "registryPackage" [] object_ (identity >> Decode.nullable)


{-| Release associated with this package.
-}
release : SelectionSet decodesTo GitHub.Object.Release -> SelectionSet (Maybe decodesTo) GitHub.Object.RegistryPackageVersion
release object_ =
    Object.selectionForCompositeField "release" [] object_ (identity >> Decode.nullable)


{-| Identifies the sha256.
-}
sha256 : SelectionSet (Maybe String) GitHub.Object.RegistryPackageVersion
sha256 =
    Object.selectionForField "(Maybe String)" "sha256" [] (Decode.string |> Decode.nullable)


{-| Identifies the size.
-}
size : SelectionSet (Maybe Int) GitHub.Object.RegistryPackageVersion
size =
    Object.selectionForField "(Maybe Int)" "size" [] (Decode.int |> Decode.nullable)


{-| Statistics about package activity.
-}
statistics : SelectionSet decodesTo GitHub.Object.RegistryPackageVersionStatistics -> SelectionSet (Maybe decodesTo) GitHub.Object.RegistryPackageVersion
statistics object_ =
    Object.selectionForCompositeField "statistics" [] object_ (identity >> Decode.nullable)


{-| Identifies the package version summary.
-}
summary : SelectionSet (Maybe String) GitHub.Object.RegistryPackageVersion
summary =
    Object.selectionForField "(Maybe String)" "summary" [] (Decode.string |> Decode.nullable)


{-| Time at which the most recent file upload for this package version finished
-}
updatedAt : SelectionSet GitHub.ScalarCodecs.DateTime GitHub.Object.RegistryPackageVersion
updatedAt =
    Object.selectionForField "ScalarCodecs.DateTime" "updatedAt" [] (GitHub.ScalarCodecs.codecs |> GitHub.Scalar.unwrapCodecs |> .codecDateTime |> .decoder)


{-| Identifies the version number.
-}
version : SelectionSet String GitHub.Object.RegistryPackageVersion
version =
    Object.selectionForField "String" "version" [] Decode.string


{-| Can the current viewer edit this Package version.
-}
viewerCanEdit : SelectionSet Bool GitHub.Object.RegistryPackageVersion
viewerCanEdit =
    Object.selectionForField "Bool" "viewerCanEdit" [] Decode.bool
