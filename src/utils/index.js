export function convertTimestampToDateString(timestamp) {
  const date = new Date(timestamp);
  const options = { hour: "2-digit", minute: "2-digit" };
  const readableDate = date.toLocaleDateString("en-GB", options);
  return readableDate.replace(",", "");
}

export const adjustText = (text) => {
  if (typeof text !== "string") return { serverName: text };
  const maxFontSize = 22.25;
  const maxLength = 7;
  const step = 1.75;

  if (text.length <= maxLength) {
    const fontSize = maxFontSize - step * (text.length - 1);
    return { serverName: text, fontSize };
  } else {
    const serverName = text.slice(0, maxLength).trim() + "...";
    const fontSize = maxFontSize - step * maxLength;
    return { serverName, fontSize };
  }
};

export function filterChannelsByType(channels, type) {
  return channels.filter((channel) => channel.type === type);
}
