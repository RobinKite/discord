import { Endpoint } from "@/constants/api";
import { SAMPLE_SERVER } from "@/constants/mock";
import { api } from "@/services/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const serverSlice = createSlice({
  name: "server",
  initialState: {
    currentChannel: {},
    currentServer: {},
    serverId: "",
    channelId: "",
    servers: [SAMPLE_SERVER],
    allServers: [],
    messages: [],
    extraServerId: "",
    areServersLoading: true,
  },
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    setExtraServerId: (state, action) => {
      state.extraServerId = action.payload;
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    removeMessage: (state, action) => {
      state.messages = state.messages.filter(
        (message) => message.id !== action.payload,
      );
    },
    setAllServers: (state, action) => {
      state.allServers = action.payload;
    },
    clearServers: (state) => {
      state.servers = [];
    },
    clearCurrentServer: (state) => {
      state.currentChannel = {};
      state.currentServer = {};
      state.serverId = "";
      state.channelId = "";
      state.messages = [];
    },
    setAreServersLoading(state, action) {
      state.areServersLoading = action.payload;
    },
    addServer: (state, action) => {
      state.servers.push(action.payload);
    },

    removeServer: (state, action) => {
      state.servers = state.servers.filter(
        (room) => room.id !== action.payload,
      );
    },
    setCurrentServer: (state, action) => {
      state.currentServer = action.payload;
      state.currentChannel = action.payload.channels[0];
      state.serverId = action.payload.id;
      state.channelId = action.payload.channels[0].id;
    },
    setCurrentServerId: (state, action) => {
      if (action.payload) {
        const serverToFind = state.servers.find(
          (server) => server.id === action.payload,
        );
        state.currentServer = serverToFind;
        state.currentChannel = serverToFind.channels[0];
        state.channelId = serverToFind.channels[0].id;
      }
      state.serverId = action.payload;
    },
    setCurrentChannel: (state, action) => {
      state.currentChannel = action.payload;
      state.channelId = action.payload.id;
    },
    updateNotificationCount: (state, action) => {
      const serverIdToUpdate = action.payload;
      const serverToUpdate = state.servers.find(
        (server) => server.id === serverIdToUpdate,
      );

      if (serverToUpdate) {
        serverToUpdate.notificationCount += 1;
      }
    },
    addChannelToServer: (state, action) => {
      const { serverId, channel } = action.payload;
      const serverToUpdate = state.servers.find(
        (server) => server.id === serverId,
      );
      if (serverToUpdate) {
        serverToUpdate.channels.push(channel);
      }
    },
    removeChannelFromServer: (state, action) => {
      const { serverId, channelId } = action.payload;
      const serverToUpdate = state.servers.find(
        (server) => server.id === serverId,
      );
      if (serverToUpdate) {
        serverToUpdate.channels = serverToUpdate.channels.filter(
          (channel) => channel.id !== channelId,
        );
      }
    },
    addServerRole: (state, action) => {
      const { serverId, role } = action.payload;
      const serverToUpdate = state.servers.find(
        (server) => server.id === serverId,
      );
      if (serverToUpdate) {
        serverToUpdate.roles.push(role);
      }
    },
    removeServerRole: (state, action) => {
      const { serverId, roleId } = action.payload;
      const serverToUpdate = state.servers.find(
        (server) => server.id === serverId,
      );
      if (serverToUpdate) {
        serverToUpdate.roles = serverToUpdate.roles.filter(
          (role) => role.id !== roleId,
        );
      }
    },
    addUserToServerRole: (state, action) => {
      const { serverId, roleId, userId } = action.payload;
      const serverToUpdate = state.servers.find(
        (server) => server.id === serverId,
      );
      if (serverToUpdate) {
        const roleToUpdate = serverToUpdate.roles.find(
          (role) => role.id === roleId,
        );
        if (roleToUpdate) {
          roleToUpdate.users.push(userId);
        }
      }
    },
    removeUserFromServerRole: (state, action) => {
      const { serverId, roleId, userId } = action.payload;
      const serverToUpdate = state.servers.find(
        (server) => server.id === serverId,
      );
      if (serverToUpdate) {
        const roleToUpdate = serverToUpdate.roles.find(
          (role) => role.id === roleId,
        );
        if (roleToUpdate) {
          roleToUpdate.users = roleToUpdate.users.filter(
            (user) => user !== userId,
          );
        }
      }
    },
  },
});

export const setServers = createAsyncThunk(
  Endpoint.SERVERS,
  async (_, thunkAPI) => {
    const result = await api.get(Endpoint.SERVERS);
    const servers = result.data;

    const currentServers = thunkAPI.getState().server.servers;

    if (servers.length) {
      servers.forEach((server, index, array) => {
        const existingServer = currentServers.find((s) => s.id === server.link);

        if (!existingServer) {
          const { title, owner, link, textChannels } = server;
          // eslint-disable-next-line no-unused-vars
          const { isLoggedIn, isLoading, ...currentUser } =
            thunkAPI.getState().auth;
          thunkAPI.dispatch(
            addServer({
              id: link,
              title,
              owner,
              users: [currentUser],
              channels: [
                ...textChannels.map((channel) => ({
                  ...channel,
                  id: channel.link,
                  type: "text",
                })),
              ],
              notificationCount: 0,
            }),
          );
        }
        if (index === array.length - 1) {
          thunkAPI.dispatch(setAreServersLoading(false));
        }
      });
    } else {
      thunkAPI.dispatch(setAreServersLoading(false));
    }
    return result;
  },
);

export const createServer = createAsyncThunk(
  Endpoint.SERVERS,
  async (data, thunkAPI) => {
    const result = await api.post(Endpoint.SERVERS, data);
    const { title, owner, link, textChannels } = result.data;
    // eslint-disable-next-line no-unused-vars
    const { isLoggedIn, isLoading, ...currentUser } = thunkAPI.getState().auth;
    thunkAPI.dispatch(
      addServer({
        id: link,
        title,
        owner,
        users: [currentUser],
        channels: [
          ...textChannels.map((channel) => ({
            ...channel,
            id: channel.link,
            type: "text",
          })),
        ],
        notificationCount: 0,
      }),
    );
    return result;
  },
);

export const getMessages = createAsyncThunk(
  Endpoint.TEXT_CHANNEL,
  async (_, thunkAPI) => {
    const result = await api.get(Endpoint.TEXT_CHANNEL);
    // const { title, server, link, connect, messages } = result.data;
    const { messages } = result.data;

    thunkAPI.dispatch(setMessages(messages));

    return result;
  },
);

export const setUnsubbedServers = createAsyncThunk(
  Endpoint.ALL_SERVERS,
  async (_, thunkAPI) => {
    const result = await api.get(Endpoint.ALL_SERVERS);
    const data = result.data;
    console.log(data);

    if (data.length) {
      thunkAPI.dispatch(setAllServers(data));
    }
    return result;
  },
);

export const clearServerSlice = () => (dispatch) => {
  dispatch(clearCurrentServer());
  dispatch(setAllServers([]));
  dispatch(clearServers());
};

export const {
  clearCurrentServer,
  setMessages,
  addMessage,
  removeMessage,
  addServer,
  removeServer,
  updateNotificationCount,
  addChannelToServer,
  removeChannelFromServer,
  addUserToServerRole,
  removeUserFromServerRole,
  setCurrentServer,
  setCurrentServerId,
  setCurrentChannel,
  setAllServers,
  clearServers,
  setExtraServerId,
  setAreServersLoading,
} = serverSlice.actions;
export default serverSlice.reducer;
