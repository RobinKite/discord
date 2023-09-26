import { Status } from ".";

export const SAMPLE_MESSAGES = [
  {
    avatarUrl: "/",
    authorName: "User1",
    timestamp: 1694970000000,
    text: "Text",
  },
  {
    avatarUrl: "/",
    authorName: "User2",
    timestamp: 1694970600000,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusantium itaque eligendi est, doloremque inventore repellat optio dignissimos, veritatis cum voluptates impedit! Tempora veniam facere enim eveniet atque vitae maxime.",
  },
];

export const users = [
  {
    userName: "Eric",
    userId: "1",
    role: "role-1",
    status: Status.ONLINE,
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
