import { appendDatePlugin } from "@vuepress/plugin-append-date";
import type { UserConfig } from "vuepress";
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default <UserConfig>defineUserConfig({
  dest: "dist",

  head: [
    [
      "link",
      {
        rel: "mask-icon",
        href: "/assets/safari-pinned-tab.svg",
        color: "#5c92d1",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Ocean",
      description: "Where there is light, there is hope.",
    },

    "/en/": {
      title: "My name is Ocean",
      description: "Ocean personal blog",
    },
  },

  theme,

  plugins: [appendDatePlugin()],

  shouldPrefetch: false,
});
