-- Do not manually edit this file, it was auto-generated by dillonkearns/elm-graphql
-- https://github.com/dillonkearns/elm-graphql


module GitHub.Interface.AuditEntry exposing (..)

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
    { onMembersCanDeleteReposClearAuditEntry : SelectionSet decodesTo GitHub.Object.MembersCanDeleteReposClearAuditEntry
    , onMembersCanDeleteReposDisableAuditEntry : SelectionSet decodesTo GitHub.Object.MembersCanDeleteReposDisableAuditEntry
    , onMembersCanDeleteReposEnableAuditEntry : SelectionSet decodesTo GitHub.Object.MembersCanDeleteReposEnableAuditEntry
    , onOauthApplicationCreateAuditEntry : SelectionSet decodesTo GitHub.Object.OauthApplicationCreateAuditEntry
    , onOrgAddBillingManagerAuditEntry : SelectionSet decodesTo GitHub.Object.OrgAddBillingManagerAuditEntry
    , onOrgAddMemberAuditEntry : SelectionSet decodesTo GitHub.Object.OrgAddMemberAuditEntry
    , onOrgBlockUserAuditEntry : SelectionSet decodesTo GitHub.Object.OrgBlockUserAuditEntry
    , onOrgConfigDisableCollaboratorsOnlyAuditEntry : SelectionSet decodesTo GitHub.Object.OrgConfigDisableCollaboratorsOnlyAuditEntry
    , onOrgConfigEnableCollaboratorsOnlyAuditEntry : SelectionSet decodesTo GitHub.Object.OrgConfigEnableCollaboratorsOnlyAuditEntry
    , onOrgDisableOauthAppRestrictionsAuditEntry : SelectionSet decodesTo GitHub.Object.OrgDisableOauthAppRestrictionsAuditEntry
    , onOrgDisableSamlAuditEntry : SelectionSet decodesTo GitHub.Object.OrgDisableSamlAuditEntry
    , onOrgDisableTwoFactorRequirementAuditEntry : SelectionSet decodesTo GitHub.Object.OrgDisableTwoFactorRequirementAuditEntry
    , onOrgEnableOauthAppRestrictionsAuditEntry : SelectionSet decodesTo GitHub.Object.OrgEnableOauthAppRestrictionsAuditEntry
    , onOrgEnableSamlAuditEntry : SelectionSet decodesTo GitHub.Object.OrgEnableSamlAuditEntry
    , onOrgEnableTwoFactorRequirementAuditEntry : SelectionSet decodesTo GitHub.Object.OrgEnableTwoFactorRequirementAuditEntry
    , onOrgInviteMemberAuditEntry : SelectionSet decodesTo GitHub.Object.OrgInviteMemberAuditEntry
    , onOrgInviteToBusinessAuditEntry : SelectionSet decodesTo GitHub.Object.OrgInviteToBusinessAuditEntry
    , onOrgOauthAppAccessApprovedAuditEntry : SelectionSet decodesTo GitHub.Object.OrgOauthAppAccessApprovedAuditEntry
    , onOrgOauthAppAccessDeniedAuditEntry : SelectionSet decodesTo GitHub.Object.OrgOauthAppAccessDeniedAuditEntry
    , onOrgOauthAppAccessRequestedAuditEntry : SelectionSet decodesTo GitHub.Object.OrgOauthAppAccessRequestedAuditEntry
    , onOrgRemoveBillingManagerAuditEntry : SelectionSet decodesTo GitHub.Object.OrgRemoveBillingManagerAuditEntry
    , onOrgRemoveMemberAuditEntry : SelectionSet decodesTo GitHub.Object.OrgRemoveMemberAuditEntry
    , onOrgRemoveOutsideCollaboratorAuditEntry : SelectionSet decodesTo GitHub.Object.OrgRemoveOutsideCollaboratorAuditEntry
    , onOrgRestoreMemberAuditEntry : SelectionSet decodesTo GitHub.Object.OrgRestoreMemberAuditEntry
    , onOrgUnblockUserAuditEntry : SelectionSet decodesTo GitHub.Object.OrgUnblockUserAuditEntry
    , onOrgUpdateDefaultRepositoryPermissionAuditEntry : SelectionSet decodesTo GitHub.Object.OrgUpdateDefaultRepositoryPermissionAuditEntry
    , onOrgUpdateMemberAuditEntry : SelectionSet decodesTo GitHub.Object.OrgUpdateMemberAuditEntry
    , onOrgUpdateMemberRepositoryCreationPermissionAuditEntry : SelectionSet decodesTo GitHub.Object.OrgUpdateMemberRepositoryCreationPermissionAuditEntry
    , onOrgUpdateMemberRepositoryInvitationPermissionAuditEntry : SelectionSet decodesTo GitHub.Object.OrgUpdateMemberRepositoryInvitationPermissionAuditEntry
    , onPrivateRepositoryForkingDisableAuditEntry : SelectionSet decodesTo GitHub.Object.PrivateRepositoryForkingDisableAuditEntry
    , onPrivateRepositoryForkingEnableAuditEntry : SelectionSet decodesTo GitHub.Object.PrivateRepositoryForkingEnableAuditEntry
    , onRepoAccessAuditEntry : SelectionSet decodesTo GitHub.Object.RepoAccessAuditEntry
    , onRepoAddMemberAuditEntry : SelectionSet decodesTo GitHub.Object.RepoAddMemberAuditEntry
    , onRepoAddTopicAuditEntry : SelectionSet decodesTo GitHub.Object.RepoAddTopicAuditEntry
    , onRepoArchivedAuditEntry : SelectionSet decodesTo GitHub.Object.RepoArchivedAuditEntry
    , onRepoChangeMergeSettingAuditEntry : SelectionSet decodesTo GitHub.Object.RepoChangeMergeSettingAuditEntry
    , onRepoConfigDisableAnonymousGitAccessAuditEntry : SelectionSet decodesTo GitHub.Object.RepoConfigDisableAnonymousGitAccessAuditEntry
    , onRepoConfigDisableCollaboratorsOnlyAuditEntry : SelectionSet decodesTo GitHub.Object.RepoConfigDisableCollaboratorsOnlyAuditEntry
    , onRepoConfigDisableContributorsOnlyAuditEntry : SelectionSet decodesTo GitHub.Object.RepoConfigDisableContributorsOnlyAuditEntry
    , onRepoConfigDisableSockpuppetDisallowedAuditEntry : SelectionSet decodesTo GitHub.Object.RepoConfigDisableSockpuppetDisallowedAuditEntry
    , onRepoConfigEnableAnonymousGitAccessAuditEntry : SelectionSet decodesTo GitHub.Object.RepoConfigEnableAnonymousGitAccessAuditEntry
    , onRepoConfigEnableCollaboratorsOnlyAuditEntry : SelectionSet decodesTo GitHub.Object.RepoConfigEnableCollaboratorsOnlyAuditEntry
    , onRepoConfigEnableContributorsOnlyAuditEntry : SelectionSet decodesTo GitHub.Object.RepoConfigEnableContributorsOnlyAuditEntry
    , onRepoConfigEnableSockpuppetDisallowedAuditEntry : SelectionSet decodesTo GitHub.Object.RepoConfigEnableSockpuppetDisallowedAuditEntry
    , onRepoConfigLockAnonymousGitAccessAuditEntry : SelectionSet decodesTo GitHub.Object.RepoConfigLockAnonymousGitAccessAuditEntry
    , onRepoConfigUnlockAnonymousGitAccessAuditEntry : SelectionSet decodesTo GitHub.Object.RepoConfigUnlockAnonymousGitAccessAuditEntry
    , onRepoCreateAuditEntry : SelectionSet decodesTo GitHub.Object.RepoCreateAuditEntry
    , onRepoDestroyAuditEntry : SelectionSet decodesTo GitHub.Object.RepoDestroyAuditEntry
    , onRepoRemoveMemberAuditEntry : SelectionSet decodesTo GitHub.Object.RepoRemoveMemberAuditEntry
    , onRepoRemoveTopicAuditEntry : SelectionSet decodesTo GitHub.Object.RepoRemoveTopicAuditEntry
    , onRepositoryVisibilityChangeDisableAuditEntry : SelectionSet decodesTo GitHub.Object.RepositoryVisibilityChangeDisableAuditEntry
    , onRepositoryVisibilityChangeEnableAuditEntry : SelectionSet decodesTo GitHub.Object.RepositoryVisibilityChangeEnableAuditEntry
    , onTeamAddMemberAuditEntry : SelectionSet decodesTo GitHub.Object.TeamAddMemberAuditEntry
    , onTeamAddRepositoryAuditEntry : SelectionSet decodesTo GitHub.Object.TeamAddRepositoryAuditEntry
    , onTeamChangeParentTeamAuditEntry : SelectionSet decodesTo GitHub.Object.TeamChangeParentTeamAuditEntry
    , onTeamRemoveMemberAuditEntry : SelectionSet decodesTo GitHub.Object.TeamRemoveMemberAuditEntry
    , onTeamRemoveRepositoryAuditEntry : SelectionSet decodesTo GitHub.Object.TeamRemoveRepositoryAuditEntry
    }


{-| Build an exhaustive selection of type-specific fragments.
-}
fragments :
    Fragments decodesTo
    -> SelectionSet decodesTo GitHub.Interface.AuditEntry
fragments selections =
    Object.exhuastiveFragmentSelection
        [ Object.buildFragment "MembersCanDeleteReposClearAuditEntry" selections.onMembersCanDeleteReposClearAuditEntry
        , Object.buildFragment "MembersCanDeleteReposDisableAuditEntry" selections.onMembersCanDeleteReposDisableAuditEntry
        , Object.buildFragment "MembersCanDeleteReposEnableAuditEntry" selections.onMembersCanDeleteReposEnableAuditEntry
        , Object.buildFragment "OauthApplicationCreateAuditEntry" selections.onOauthApplicationCreateAuditEntry
        , Object.buildFragment "OrgAddBillingManagerAuditEntry" selections.onOrgAddBillingManagerAuditEntry
        , Object.buildFragment "OrgAddMemberAuditEntry" selections.onOrgAddMemberAuditEntry
        , Object.buildFragment "OrgBlockUserAuditEntry" selections.onOrgBlockUserAuditEntry
        , Object.buildFragment "OrgConfigDisableCollaboratorsOnlyAuditEntry" selections.onOrgConfigDisableCollaboratorsOnlyAuditEntry
        , Object.buildFragment "OrgConfigEnableCollaboratorsOnlyAuditEntry" selections.onOrgConfigEnableCollaboratorsOnlyAuditEntry
        , Object.buildFragment "OrgDisableOauthAppRestrictionsAuditEntry" selections.onOrgDisableOauthAppRestrictionsAuditEntry
        , Object.buildFragment "OrgDisableSamlAuditEntry" selections.onOrgDisableSamlAuditEntry
        , Object.buildFragment "OrgDisableTwoFactorRequirementAuditEntry" selections.onOrgDisableTwoFactorRequirementAuditEntry
        , Object.buildFragment "OrgEnableOauthAppRestrictionsAuditEntry" selections.onOrgEnableOauthAppRestrictionsAuditEntry
        , Object.buildFragment "OrgEnableSamlAuditEntry" selections.onOrgEnableSamlAuditEntry
        , Object.buildFragment "OrgEnableTwoFactorRequirementAuditEntry" selections.onOrgEnableTwoFactorRequirementAuditEntry
        , Object.buildFragment "OrgInviteMemberAuditEntry" selections.onOrgInviteMemberAuditEntry
        , Object.buildFragment "OrgInviteToBusinessAuditEntry" selections.onOrgInviteToBusinessAuditEntry
        , Object.buildFragment "OrgOauthAppAccessApprovedAuditEntry" selections.onOrgOauthAppAccessApprovedAuditEntry
        , Object.buildFragment "OrgOauthAppAccessDeniedAuditEntry" selections.onOrgOauthAppAccessDeniedAuditEntry
        , Object.buildFragment "OrgOauthAppAccessRequestedAuditEntry" selections.onOrgOauthAppAccessRequestedAuditEntry
        , Object.buildFragment "OrgRemoveBillingManagerAuditEntry" selections.onOrgRemoveBillingManagerAuditEntry
        , Object.buildFragment "OrgRemoveMemberAuditEntry" selections.onOrgRemoveMemberAuditEntry
        , Object.buildFragment "OrgRemoveOutsideCollaboratorAuditEntry" selections.onOrgRemoveOutsideCollaboratorAuditEntry
        , Object.buildFragment "OrgRestoreMemberAuditEntry" selections.onOrgRestoreMemberAuditEntry
        , Object.buildFragment "OrgUnblockUserAuditEntry" selections.onOrgUnblockUserAuditEntry
        , Object.buildFragment "OrgUpdateDefaultRepositoryPermissionAuditEntry" selections.onOrgUpdateDefaultRepositoryPermissionAuditEntry
        , Object.buildFragment "OrgUpdateMemberAuditEntry" selections.onOrgUpdateMemberAuditEntry
        , Object.buildFragment "OrgUpdateMemberRepositoryCreationPermissionAuditEntry" selections.onOrgUpdateMemberRepositoryCreationPermissionAuditEntry
        , Object.buildFragment "OrgUpdateMemberRepositoryInvitationPermissionAuditEntry" selections.onOrgUpdateMemberRepositoryInvitationPermissionAuditEntry
        , Object.buildFragment "PrivateRepositoryForkingDisableAuditEntry" selections.onPrivateRepositoryForkingDisableAuditEntry
        , Object.buildFragment "PrivateRepositoryForkingEnableAuditEntry" selections.onPrivateRepositoryForkingEnableAuditEntry
        , Object.buildFragment "RepoAccessAuditEntry" selections.onRepoAccessAuditEntry
        , Object.buildFragment "RepoAddMemberAuditEntry" selections.onRepoAddMemberAuditEntry
        , Object.buildFragment "RepoAddTopicAuditEntry" selections.onRepoAddTopicAuditEntry
        , Object.buildFragment "RepoArchivedAuditEntry" selections.onRepoArchivedAuditEntry
        , Object.buildFragment "RepoChangeMergeSettingAuditEntry" selections.onRepoChangeMergeSettingAuditEntry
        , Object.buildFragment "RepoConfigDisableAnonymousGitAccessAuditEntry" selections.onRepoConfigDisableAnonymousGitAccessAuditEntry
        , Object.buildFragment "RepoConfigDisableCollaboratorsOnlyAuditEntry" selections.onRepoConfigDisableCollaboratorsOnlyAuditEntry
        , Object.buildFragment "RepoConfigDisableContributorsOnlyAuditEntry" selections.onRepoConfigDisableContributorsOnlyAuditEntry
        , Object.buildFragment "RepoConfigDisableSockpuppetDisallowedAuditEntry" selections.onRepoConfigDisableSockpuppetDisallowedAuditEntry
        , Object.buildFragment "RepoConfigEnableAnonymousGitAccessAuditEntry" selections.onRepoConfigEnableAnonymousGitAccessAuditEntry
        , Object.buildFragment "RepoConfigEnableCollaboratorsOnlyAuditEntry" selections.onRepoConfigEnableCollaboratorsOnlyAuditEntry
        , Object.buildFragment "RepoConfigEnableContributorsOnlyAuditEntry" selections.onRepoConfigEnableContributorsOnlyAuditEntry
        , Object.buildFragment "RepoConfigEnableSockpuppetDisallowedAuditEntry" selections.onRepoConfigEnableSockpuppetDisallowedAuditEntry
        , Object.buildFragment "RepoConfigLockAnonymousGitAccessAuditEntry" selections.onRepoConfigLockAnonymousGitAccessAuditEntry
        , Object.buildFragment "RepoConfigUnlockAnonymousGitAccessAuditEntry" selections.onRepoConfigUnlockAnonymousGitAccessAuditEntry
        , Object.buildFragment "RepoCreateAuditEntry" selections.onRepoCreateAuditEntry
        , Object.buildFragment "RepoDestroyAuditEntry" selections.onRepoDestroyAuditEntry
        , Object.buildFragment "RepoRemoveMemberAuditEntry" selections.onRepoRemoveMemberAuditEntry
        , Object.buildFragment "RepoRemoveTopicAuditEntry" selections.onRepoRemoveTopicAuditEntry
        , Object.buildFragment "RepositoryVisibilityChangeDisableAuditEntry" selections.onRepositoryVisibilityChangeDisableAuditEntry
        , Object.buildFragment "RepositoryVisibilityChangeEnableAuditEntry" selections.onRepositoryVisibilityChangeEnableAuditEntry
        , Object.buildFragment "TeamAddMemberAuditEntry" selections.onTeamAddMemberAuditEntry
        , Object.buildFragment "TeamAddRepositoryAuditEntry" selections.onTeamAddRepositoryAuditEntry
        , Object.buildFragment "TeamChangeParentTeamAuditEntry" selections.onTeamChangeParentTeamAuditEntry
        , Object.buildFragment "TeamRemoveMemberAuditEntry" selections.onTeamRemoveMemberAuditEntry
        , Object.buildFragment "TeamRemoveRepositoryAuditEntry" selections.onTeamRemoveRepositoryAuditEntry
        ]


{-| Can be used to create a non-exhuastive set of fragments by using the record
update syntax to add `SelectionSet`s for the types you want to handle.
-}
maybeFragments : Fragments (Maybe decodesTo)
maybeFragments =
    { onMembersCanDeleteReposClearAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onMembersCanDeleteReposDisableAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onMembersCanDeleteReposEnableAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onOauthApplicationCreateAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onOrgAddBillingManagerAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onOrgAddMemberAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onOrgBlockUserAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onOrgConfigDisableCollaboratorsOnlyAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onOrgConfigEnableCollaboratorsOnlyAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onOrgDisableOauthAppRestrictionsAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onOrgDisableSamlAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onOrgDisableTwoFactorRequirementAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onOrgEnableOauthAppRestrictionsAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onOrgEnableSamlAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onOrgEnableTwoFactorRequirementAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onOrgInviteMemberAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onOrgInviteToBusinessAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onOrgOauthAppAccessApprovedAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onOrgOauthAppAccessDeniedAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onOrgOauthAppAccessRequestedAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onOrgRemoveBillingManagerAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onOrgRemoveMemberAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onOrgRemoveOutsideCollaboratorAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onOrgRestoreMemberAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onOrgUnblockUserAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onOrgUpdateDefaultRepositoryPermissionAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onOrgUpdateMemberAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onOrgUpdateMemberRepositoryCreationPermissionAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onOrgUpdateMemberRepositoryInvitationPermissionAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onPrivateRepositoryForkingDisableAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onPrivateRepositoryForkingEnableAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onRepoAccessAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onRepoAddMemberAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onRepoAddTopicAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onRepoArchivedAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onRepoChangeMergeSettingAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onRepoConfigDisableAnonymousGitAccessAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onRepoConfigDisableCollaboratorsOnlyAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onRepoConfigDisableContributorsOnlyAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onRepoConfigDisableSockpuppetDisallowedAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onRepoConfigEnableAnonymousGitAccessAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onRepoConfigEnableCollaboratorsOnlyAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onRepoConfigEnableContributorsOnlyAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onRepoConfigEnableSockpuppetDisallowedAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onRepoConfigLockAnonymousGitAccessAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onRepoConfigUnlockAnonymousGitAccessAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onRepoCreateAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onRepoDestroyAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onRepoRemoveMemberAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onRepoRemoveTopicAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onRepositoryVisibilityChangeDisableAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onRepositoryVisibilityChangeEnableAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onTeamAddMemberAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onTeamAddRepositoryAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onTeamChangeParentTeamAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onTeamRemoveMemberAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    , onTeamRemoveRepositoryAuditEntry = Graphql.SelectionSet.empty |> Graphql.SelectionSet.map (\_ -> Nothing)
    }


{-| The action name
-}
action : SelectionSet String GitHub.Interface.AuditEntry
action =
    Object.selectionForField "String" "action" [] Decode.string


{-| The user who initiated the action
-}
actor : SelectionSet decodesTo GitHub.Union.AuditEntryActor -> SelectionSet (Maybe decodesTo) GitHub.Interface.AuditEntry
actor object_ =
    Object.selectionForCompositeField "actor" [] object_ (identity >> Decode.nullable)


{-| The IP address of the actor
-}
actorIp : SelectionSet (Maybe String) GitHub.Interface.AuditEntry
actorIp =
    Object.selectionForField "(Maybe String)" "actorIp" [] (Decode.string |> Decode.nullable)


{-| A readable representation of the actor's location
-}
actorLocation : SelectionSet decodesTo GitHub.Object.ActorLocation -> SelectionSet (Maybe decodesTo) GitHub.Interface.AuditEntry
actorLocation object_ =
    Object.selectionForCompositeField "actorLocation" [] object_ (identity >> Decode.nullable)


{-| The username of the user who initiated the action
-}
actorLogin : SelectionSet (Maybe String) GitHub.Interface.AuditEntry
actorLogin =
    Object.selectionForField "(Maybe String)" "actorLogin" [] (Decode.string |> Decode.nullable)


{-| The HTTP path for the actor.
-}
actorResourcePath : SelectionSet (Maybe GitHub.ScalarCodecs.Uri) GitHub.Interface.AuditEntry
actorResourcePath =
    Object.selectionForField "(Maybe ScalarCodecs.Uri)" "actorResourcePath" [] (GitHub.ScalarCodecs.codecs |> GitHub.Scalar.unwrapCodecs |> .codecUri |> .decoder |> Decode.nullable)


{-| The HTTP URL for the actor.
-}
actorUrl : SelectionSet (Maybe GitHub.ScalarCodecs.Uri) GitHub.Interface.AuditEntry
actorUrl =
    Object.selectionForField "(Maybe ScalarCodecs.Uri)" "actorUrl" [] (GitHub.ScalarCodecs.codecs |> GitHub.Scalar.unwrapCodecs |> .codecUri |> .decoder |> Decode.nullable)


{-| The time the action was initiated
-}
createdAt : SelectionSet GitHub.ScalarCodecs.PreciseDateTime GitHub.Interface.AuditEntry
createdAt =
    Object.selectionForField "ScalarCodecs.PreciseDateTime" "createdAt" [] (GitHub.ScalarCodecs.codecs |> GitHub.Scalar.unwrapCodecs |> .codecPreciseDateTime |> .decoder)


{-| The user affected by the action
-}
user : SelectionSet decodesTo GitHub.Object.User -> SelectionSet (Maybe decodesTo) GitHub.Interface.AuditEntry
user object_ =
    Object.selectionForCompositeField "user" [] object_ (identity >> Decode.nullable)


{-| For actions involving two users, the actor is the initiator and the user is the affected user.
-}
userLogin : SelectionSet (Maybe String) GitHub.Interface.AuditEntry
userLogin =
    Object.selectionForField "(Maybe String)" "userLogin" [] (Decode.string |> Decode.nullable)


{-| The HTTP path for the user.
-}
userResourcePath : SelectionSet (Maybe GitHub.ScalarCodecs.Uri) GitHub.Interface.AuditEntry
userResourcePath =
    Object.selectionForField "(Maybe ScalarCodecs.Uri)" "userResourcePath" [] (GitHub.ScalarCodecs.codecs |> GitHub.Scalar.unwrapCodecs |> .codecUri |> .decoder |> Decode.nullable)


{-| The HTTP URL for the user.
-}
userUrl : SelectionSet (Maybe GitHub.ScalarCodecs.Uri) GitHub.Interface.AuditEntry
userUrl =
    Object.selectionForField "(Maybe ScalarCodecs.Uri)" "userUrl" [] (GitHub.ScalarCodecs.codecs |> GitHub.Scalar.unwrapCodecs |> .codecUri |> .decoder |> Decode.nullable)
