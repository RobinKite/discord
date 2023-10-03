export const daysArray = [...Array(31).keys()].map(day => day + 1);
export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export class Tokens {
  static ACCESS = "accessToken";
  static REFRESH = "refreshToken";
}

export class Modal {
  static SETTINGS = "settings";
}

export class Themes {
  static LIGHT = "light";
  static DARK = "dark";
}

export class Status {
  static ONLINE = "online";
  static OFFLINE = "offline";
  static IDLE = "idle";
  static INVISIBLE = "invisible";
}
