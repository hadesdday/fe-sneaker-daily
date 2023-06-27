import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

import path, { resolve } from "path";

import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRootDir = resolve(__dirname);

export default () => {
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "@": resolve(projectRootDir, "src"),
      },
    },
  });
};
