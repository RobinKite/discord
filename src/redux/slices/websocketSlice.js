import { createSlice } from "@reduxjs/toolkit";

const websocketSlice = createSlice({
	name: "websocket",
	initialState: {
		isConnected: false,
	},
	reducers: {
		connectWebSocket: (state) => {
			state.isConnected = true;
		},
		disconnectWebSocket: (state) => {
			state.isConnected = false;
		},
	},
});

export const { connectWebSocket, disconnectWebSocket } = websocketSlice.actions;
export default websocketSlice.reducer;
