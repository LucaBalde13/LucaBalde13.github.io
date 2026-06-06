import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://LucaBalde13.github.io",
  integrations: [react()],
  output: "static",
  build: {
    format: "directory"
  }
});
