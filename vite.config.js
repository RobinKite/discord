import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	base: "./",
	build: {
		target: "esnext",
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},
});
