export class Endpoint {
  static ME = "auth/me";
  static LOGIN = "auth/login";
  static LOGOUT = "auth/logout";
  static REGISTER = "auth/register";
  static SERVERS = "servers";
  static TEXT_CHANNEL = "channels/text/";
  static USERS = "users";
  static TEXT_CHANNEL_INVITE = (link) => `channels/text/${link}/invite`;
}
