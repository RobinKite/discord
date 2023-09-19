import { createSlice } from "@reduxjs/toolkit";

const serverSlice = createSlice({
  name: "server",
  initialState: {
    servers: [],
  },
  reducers: {
    addServer: (state, action) => {
      state.servers.push(action.payload);
    },
    removeServer: (state, action) => {
      state.servers = state.servers.filter(
        (room) => room.id !== action.payload
      );
    },
    updateNotificationCount: (state, action) => {
      const serverIdToUpdate = action.payload;
      const serverToUpdate = state.servers.find(
        (server) => server.id === serverIdToUpdate
      );

      if (serverToUpdate) {
        serverToUpdate.notificationCount += 1;
      }
    },
    addChannelToServer: (state, action) => {
      const { serverId, channel } = action.payload;
      const serverToUpdate = state.servers.find(
        (server) => server.id === serverId
      );
      if (serverToUpdate) {
        serverToUpdate.channels.push(channel);
      }
    },
    removeChannelFromServer: (state, action) => {
      const { serverId, channelId } = action.payload;
      const serverToUpdate = state.servers.find(
        (server) => server.id === serverId
      );
      if (serverToUpdate) {
        serverToUpdate.channels = serverToUpdate.channels.filter(
          (channel) => channel.id !== channelId
        );
      }
    },
    addServerRole: (state, action) => {
      const { serverId, role } = action.payload;
      const serverToUpdate = state.servers.find(
        (server) => server.id === serverId
      );
      if (serverToUpdate) {
        serverToUpdate.roles.push(role);
      }
    },
    removeServerRole: (state, action) => {
      const { serverId, roleId } = action.payload;
      const serverToUpdate = state.servers.find(
        (server) => server.id === serverId
      );
      if (serverToUpdate) {
        serverToUpdate.roles = serverToUpdate.roles.filter(
          (role) => role.id !== roleId
        );
      }
    },
    addUserToServerRole: (state, action) => {
      const { serverId, roleId, userId } = action.payload;
      const serverToUpdate = state.servers.find(
        (server) => server.id === serverId
      );
      if (serverToUpdate) {
        const roleToUpdate = serverToUpdate.roles.find(
          (role) => role.id === roleId
        );
        if (roleToUpdate) {
          roleToUpdate.users.push(userId);
        }
      }
    },
    removeUserFromServerRole: (state, action) => {
      const { serverId, roleId, userId } = action.payload;
      const serverToUpdate = state.servers.find(
        (server) => server.id === serverId
      );
      if (serverToUpdate) {
        const roleToUpdate = serverToUpdate.roles.find(
          (role) => role.id === roleId
        );
        if (roleToUpdate) {
          roleToUpdate.users = roleToUpdate.users.filter(
            (user) => user !== userId
          );
        }
      }
    },
  },
});

export const {
  addServer,
  removeServer,
  updateNotificationCount,
  addChannelToServer,
  removeChannelFromServer,
  addUserToServerRole,
  removeUserFromServerRole,
} = serverSlice.actions;
export default serverSlice.reducer;
