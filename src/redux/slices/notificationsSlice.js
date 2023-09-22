import { createSlice } from "@reduxjs/toolkit";
import { updateNotificationCount } from "./serverSlice";

const notificationsSlice = createSlice({
  name: "notifications",
  initialState: {
    notifications: [],
  },
  reducers: {
    addNotification: (state, action) => {
      const { id, message, type, serverId } = action.payload;
      state.notifications.push({ id, message, type, serverId });
      updateNotificationCount(serverId);
    },
    removeNotification: (state, action) => {
      const notificationId = action.payload;
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== notificationId
      );
    },
    clearNotifications: (state) => {
      state.notifications = [];
    },
  },
});

export const { addNotification, clearNotifications, removeNotification } =
  notificationsSlice.actions;
export default notificationsSlice.reducer;
