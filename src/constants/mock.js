import { getRandomColor } from "@/utils";
import icon from "@/assets/amongus.png";
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
    avatar: icon,
    role: "role-1",
    note: "",
    status: Status.ONLINE,
    serverRegistrationDate: "09.09.2023",
    serverName: "Bounderies",
    backgroundBanner: getRandomColor(),
  },
  {
    userId: "2",
    name: "Stan",
    userName: "stan854",
    userRegistrationDate: "07.07.2017",
    avatar: null,
    role: "role-1",
    status: Status.IDLE,
    serverRegistrationDate: "09.09.2023",
    serverName: "Bounderies",
    note: "",
    backgroundBanner: getRandomColor(),
  },
  {
    userId: "3",
    name: "Wendy",
    userName: "wendy033",
    userRegistrationDate: "07.10.2020",
    avatar: null,
    role: "role-2",
    status: Status.INVISIBLE,
    serverRegistrationDate: "09.09.2023",
    serverName: "Bond",
    note: "",
    backgroundBanner: getRandomColor(),
  },
  {
    userId: "4",
    name: "Kenny",
    userName: "007kenny",
    userRegistrationDate: "07.27.2021",
    avatar: null,
    role: "role-2",
    status: Status.INVISIBLE,
    serverRegistrationDate: "09.09.2023",
    serverName: "Ks",
    note: "",
    backgroundBanner: getRandomColor(),
  },
  {
    userId: "5",
    name: "Kyle",
    userName: "ekyle54",
    userRegistrationDate: "07.03.2022",
    serverName: "Mono",
    avatar: null,
    role: null,
    status: Status.OFFLINE,
    serverRegistrationDate: "09.09.2023",
    note: "",
    backgroundBanner: getRandomColor(),
  },
  {
    userId: "6",
    name: "Chef",
    userName: "chef80",
    userRegistrationDate: "12.17.2019",
    serverName: "Bond",
    avatar: null,
    role: null,
    status: Status.ONLINE,
    serverRegistrationDate: "09.09.2023",
    note: "",
    backgroundBanner: getRandomColor(),
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
