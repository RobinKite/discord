const REACT_APP_DAILY_API_KEY =
  "a0d88cd2f22ec8f34924997a120f07607f86a5bdc2ba211f9eb9c5bb01d0c561";
const REACT_APP_ROOM_ENDPOINT = "local";

async function createRoom() {
  const exp = Math.round(Date.now() / 1000) + 60 * 30;
  const options = {
    properties: {
      exp,
    },
  };

  const isLocal =
    REACT_APP_ROOM_ENDPOINT && REACT_APP_ROOM_ENDPOINT === "local";
  const endpoint = isLocal
    ? "https://api.daily.co/v1/rooms/"
    : `${window.location.origin}/api/rooms`;

  const headers = isLocal && {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${REACT_APP_DAILY_API_KEY}`,
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
