// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
import remarkGfm from "remark-gfm";

// https://astro.build/config
export default defineConfig({
  site: "https://k9scli.io",
  markdown: {
    // Ensure GitHub-flavored Markdown (tables, etc.) works in .md and .mdx.
    remarkPlugins: [remarkGfm],
  },
  integrations: [
    starlight({
      title: "K9s",
      description:
        "K9s provides a terminal UI to interact with your Kubernetes clusters.",
      plugins: [starlightImageZoom()],
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
        baseUrl: "https://github.com/derailed/k9s_site/edit/master/",
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
      sidebar: [
        { slug: "topics/install" },
        { slug: "topics/commands" },
        {
          label: "Customizations",
          items: [
            {
              label: "Feel",
              items: [
                { slug: "topics/config", label: "K9s" },
                { slug: "topics/aliases" },
                { slug: "topics/hotkeys" },
                { slug: "topics/plugins" },
                { slug: "topics/shell" },
              ],
            },
            {
              label: "Look",
              items: [{ slug: "topics/skins" }, { slug: "topics/columns" }],
            },
          ],
        },
        { slug: "topics/bench" },
        { slug: "topics/rbac" },
        { slug: "topics/video" },
      ],
    }),
  ],
  redirects: {
    "/topics/docs": "/",
  },
});
