export function convertTimestampToDateString(timestamp) {
  const date = new Date(timestamp * 1000);
  const options = { hour: "2-digit", minute:"2-digit" };
  const readableDate = date.toLocaleDateString("en-GB", options);
  return readableDate.replace(",", "");
}
