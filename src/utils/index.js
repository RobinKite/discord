import { Page } from "@/constants";

export function convertTimestampToDateString(timestamp) {
  const date = new Date(timestamp);
  const options = { hour: "2-digit", minute: "2-digit" };
  const readableDate = date.toLocaleDateString("en-GB", options);
  return readableDate.replace(",", "");
}

export function findPageByPathname(pathname) {
  if (pathname == "/channels/@me") {
    return Page.FRIENDS;
  } else if (pathname.includes("/channels/@me")) {
    return Page.DIRECT;
  } else if (pathname.includes("/channels/")) {
    return Page.SERVER;
  } else if (pathname === "/guild-discovery") {
    return Page.EXPLORE;
  } else if (pathname === "/filtered-servers") {
    return Page.SEARCH;
  }
  return Page.LOGIN;
}

export function removeFromArray(array, item) {
  const shallowCopy = [...array];
  const itemIndex = array.indexOf(item);
  if (itemIndex !== -1) shallowCopy.splice(itemIndex, 1);
  return shallowCopy;
}

export const formatRegistrationDate = (dateString) => {
  const date = new Date(dateString);
  const options = { month: "short", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

export const adjustText = (text, step, maxLength = 7, addEllipsis = true) => {
  if (typeof text !== "string") return { serverName: text };
  const maxFontSize = 22.5;
  const ellipsis = addEllipsis ? "..." : "";

  if (text.length <= maxLength) {
    const fontSize = maxFontSize - step * (text.length - 1);
    return { serverName: text, fontSize };
  } else {
    const serverName = text.slice(0, maxLength).trim() + ellipsis;
    const fontSize = maxFontSize - step * maxLength;
    return { serverName, fontSize };
  }
};

export const getRandomColor = () => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  if (randomColor.length < 6) {
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
  }
  return `#${randomColor}`;
};

export function filterChannelsByType(channels, type) {
  return channels.filter((channel) => channel.type === type);
}

export function trimTheLine(line) {
  return line
    .split(" ")
    .map((s) => s[0])
    .join("");
}

export function shortenArray(arr, length) {
  if (arr.length <= length) {
    return arr;
  } else {
    return arr.slice(0, length);
  }
}

export const calculateGridDimensions = (totalUsers) => {
  let gridColumns = 1;
  let gridRows = 1;

  if (totalUsers <= 2) {
    gridColumns = 1;
    gridRows = totalUsers;
  } else if (totalUsers <= 4) {
    gridColumns = 2;
    gridRows = Math.ceil(totalUsers / gridColumns);
  } else if (totalUsers <= 9) {
    gridColumns = 3;
    gridRows = Math.ceil(totalUsers / gridColumns);
  } else if (totalUsers <= 16) {
    gridColumns = 4;
    gridRows = Math.ceil(totalUsers / gridColumns);
  } else if (totalUsers <= 25) {
    gridColumns = 5;
    gridRows = Math.ceil(totalUsers / gridColumns);
  }
  return { gridColumns, gridRows };
};
