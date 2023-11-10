async function createRoom() {
  const exp = Math.round(Date.now() / 1000) + 60 * 30;
  const options = {
    properties: {
      exp,
    },
  };

  const isLocal =
    process.env.REACT_APP_ROOM_ENDPOINT &&
    process.env.REACT_APP_ROOM_ENDPOINT === "local";
  const endpoint = isLocal
    ? "https://api.daily.co/v1/rooms/"
    : `${window.location.origin}/api/rooms`;

  const headers = isLocal && {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_DAILY_API_KEY}`,
    },
  };

  const response = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(options),
    ...headers,
  });

  return response.json();
}

export default { createRoom };
