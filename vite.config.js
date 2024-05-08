import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.REACT_MAILJS_TEMPLATEID": JSON.stringify(
        env.REACT_MAILJS_TEMPLATEID
      ),
      "process.env.REACT_MAILJS_SERVICEID": JSON.stringify(
        env.REACT_MAILJS_SERVICEID
      ),
      "process.env.REACT_MAILJS_NAMEID": JSON.stringify(
        env.REACT_MAILJS_NAMEID
      ),
    },
    plugins: [react()],
  };
});
