export function convertTimestampToDateString(timestamp) {
  const date = new Date(timestamp);
  const options = { hour: "2-digit", minute: "2-digit" };
  const readableDate = date.toLocaleDateString("en-GB", options);
  return readableDate.replace(",", "");
}

export const adjustText = (text, maxLength = 7, addEllipsis = true) => {
  if (typeof text !== "string") return { serverName: text };
  const maxFontSize = 22.25;
  const step = 1.75;
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
