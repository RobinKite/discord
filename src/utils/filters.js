import { FriendStatus } from "@/constants";

export function filterFriendsByStatus(friends, status) {
  const statusToPredicate = {
    all: (status) =>
      status === FriendStatus.ONLINE || status === FriendStatus.OFFLINE,
    online: (status) => status === FriendStatus.ONLINE,
    pending: (status) => status === FriendStatus.PENDING,
    blocked: (status) => status === FriendStatus.BLOCKED,
  };

  const predicate = statusToPredicate[status] || (() => true);
  return friends.filter(({ friendStatus }) => predicate(friendStatus));
}

export function filterFriendsByText(friends, text) {
  const normalizedText = text.trim().toLowerCase();
  if (text === "") return friends;

  return friends.filter(
    ({ name, userName }) =>
      userName.toLowerCase().includes(normalizedText) ||
      name.toLowerCase().includes(normalizedText),
  );
}

export function filterChannelsByType(channels, type) {
  return channels.filter((channel) => channel.type === type);
}
