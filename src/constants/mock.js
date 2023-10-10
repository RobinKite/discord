import { Status } from ".";

export const SAMPLE_CHANNELS = [
  { id: "1", name: "general", type: "text" },
  { id: "2", name: "voice", type: "voice" },
  { id: "3", name: "random", type: "text" },
  { id: "4", name: "music", type: "voice" },
];

export const SAMPLE_USERS = [
  {
    userId: "1",
    name: "Eric",
    userName: "eric54",
    userRegistrationDate: "07.07.2018",
    avatar: "icon",
    role: "role-1",
    note: "",
    status: Status.ONLINE,
    serverRegistrationDate: "09.09.2023",
    serverName: "Bounderies",
    backgroundBanner: "yellowgreen",
    mutualFriends: [
      {
        userName: "Stan",
        userId: "2",
        role: "role-1",
        status: Status.OFFLINE,
      },
    ],
    mutualServers: [],
  },
  {
    userName: "Stan",
    userId: "2",
    role: "role-1",
    status: Status.OFFLINE,
  },
  {
    userName: "Wendy",
    userId: "3",
    role: "role-2",
    status: Status.IDLE,
  },
  {
    userName: "Kenny",
    userId: "4",
    role: null,
    status: Status.INVISIBLE,
  },
  {
    userName: "Kyle",
    userId: "5",
    role: null,
    status: Status.OFFLINE,
  },
  {
    userName: "Chef",
    userId: "6",
    role: null,
    status: Status.ONLINE,
  },
];

export const SAMPLE_MESSAGES = [
  {
    avatarUrl: "/",
    authorName: SAMPLE_USERS[0].userName,
    timestamp: 1694970000000,
    text: "Text",
  },
  {
    avatarUrl: "/",
    authorName: SAMPLE_USERS[1].userName,
    timestamp: 1694970600000,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusantium itaque eligendi est, doloremque inventore repellat optio dignissimos, veritatis cum voluptates impedit! Tempora veniam facere enim eveniet atque vitae maxime.",
  },
];

export const SAMPLE_SERVER = {
  id: "1",
  title: "default",
  channels: SAMPLE_CHANNELS,
  users: SAMPLE_USERS,
};
