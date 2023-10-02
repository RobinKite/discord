import SettingsLine from "../SettingsLine";

export const FriendsTabContent = () => {
  return (
    <>
      <h3>Who can send you a friend request?</h3>
      <label htmlFor="friendsRequest_everyone">Everyone</label>
      <input
        type="checkbox"
        id="friendsRequest_everyone"
      />
      <SettingsLine />
      <label htmlFor="friendsRequest_friends">Friends of Friends</label>
      <input
        type="checkbox"
        id="friendsRequest_friends"
      />
      <SettingsLine />
      <label htmlFor="friendsRequest_members">Server Members</label>
      <input
        type="checkbox"
        id="friendsRequest_members"
      />
      <SettingsLine />
      <label htmlFor="messagesFromServerMembers">
        Allow messages from server members?
      </label>
      <input
        type="checkbox"
        id="messagesFromServerMembers"
      />
    </>
  );
};
