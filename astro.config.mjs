// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://k9scli.io",
  integrations: [
    starlight({
      title: "K9s",
      description:
        "K9s provides a terminal UI to interact with your Kubernetes clusters.",
      logo: {
        src: "./src/assets/k9s.png",
        alt: "K9s",
        replacesTitle: false,
      },
      favicon: "/favicon.ico",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/derailed/k9s",
        },
        {
          icon: "x.com",
          label: "X",
          href: "https://twitter.com/kitesurfer",
        },
        {
          icon: "slack",
          label: "Slack",
          href: "https://k9sers.slack.com/",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/derailed/k9s/edit/master/k9s_site/",
      },
      head: [
        {
          tag: "meta",
          attrs: { property: "og:image", content: "https://k9scli.io/k9s.png" },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:image",
            content: "https://k9scli.io/k9s.png",
          },
        },
      ],
      customCss: ["./src/styles/custom.css"],
      // Sidebar is populated once topic pages are migrated.
      sidebar: [],
    }),
  ],
  redirects: {
    "/topics/docs": "/",
  },
});
