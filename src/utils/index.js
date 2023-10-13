import { Page } from "@/constants";

export function convertTimestampToDateString(timestamp) {
  const date = new Date(timestamp);
  const options = { hour: "2-digit", minute: "2-digit" };
  const readableDate = date.toLocaleDateString("en-GB", options);
  return readableDate.replace(",", "");
}

export function findPageByPathname(pathname) {
  if (pathname == "/channels/@me") {
    return Page.HOME;
  } else if (pathname.includes("/channels/@me")) {
    return Page.DIRECT;
  } else if (pathname.includes("/channels/")) {
    return Page.SERVER;
  }
  return Page.LOGIN;
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
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

export function filterChannelsByType(channels, type) {
  return channels.filter((channel) => channel.type === type);
}
