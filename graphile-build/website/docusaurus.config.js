// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const organizationName = "graphile";
const projectName = "crystal";
const mainBranch = "main";

const editUrl = `https://github.com/${organizationName}/${projectName}/tree/${mainBranch}/graphile-build/website/`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Graphile Build",
  tagline: "Automate the boring parts of building GraphQL APIs",
  url: "https://build.graphile.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          id: "default",
          path: "graphile-build",
          routeBasePath: "graphile-build",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl,
          lastVersion: "latest",
          //includeCurrentVersion: false,
          versions: {
            latest: { label: "Current" },
            4: { label: "v4 (current)", banner: "none" },
            5: { label: "v5 (rc)", banner: "unreleased" },
            current: { label: "Draft" },
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "graphile-build-pg",
        path: "graphile-build-pg",
        routeBasePath: "graphile-build-pg",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl,
        lastVersion: "latest",
        //includeCurrentVersion: false,
        versions: {
          latest: { label: "Current" },
          4: { label: "v4 (current)", banner: "none" },
          5: { label: "v5 (rc)", banner: "unreleased" },
          current: { label: "Draft" },
        },
      },
    ],

    // Allow us to import `.mermaid` files
    () => ({
      name: "webpack-customization-plugin",
      configureWebpack() {
        return {
          module: {
            rules: [
              {
                resourceQuery: /raw/,
                type: "asset/source",
              },
            ],
          },
        };
      },
    }),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "announcementBar-2",
        content:
          "This documentation is a work in progress, please forgive gaps, and feel free to send pull requests!",
        //backgroundColor: "#fafbfc",
        //textColor: "#091E42",
        isCloseable: false,
      },
      navbar: {
        title: "Home",
        logo: {
          alt: "Graphile Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            docsPluginId: "default",
            position: "left",
            label: "Graphile Build",
          },
          {
            type: "docsVersionDropdown",
            position: "left",
            //docsPluginId: "docs",
            dropdownActiveClassDisabled: true,
          },
          {
            type: "doc",
            docId: "index",
            docsPluginId: "graphile-build-pg",
            position: "left",
            label: "Graphile Build pg",
          },
          {
            type: "docsVersionDropdown",
            position: "left",
            docsPluginId: "graphile-build-pg",
            dropdownActiveClassDisabled: true,
          },
          {
            href: `https://github.com/${organizationName}/${projectName}`,
            label: "GitHub",
            position: "right",
          },
          {
            href: `https://graphile.org/sponsor/`,
            label: "Sponsor",
            position: "right",
          },
          {
            href: `https://graphile.org/support/`,
            label: "Support",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Graphile Build",
                to: "/graphile-build/",
              },
              {
                label: "Graphile Build pg",
                to: "/graphile-build-pg/",
              },
              {
                html: '<a class="footer__link-item" href="https://grafast.org">Gra<em>fast</em></a>',
              },
              {
                label: "PostGraphile",
                to: "https://postgraphile.org",
              },
              {
                label: "Graphile*",
                to: "https://star.graphile.org",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/graphile",
              },
              {
                label: "Mastodon",
                href: "https://fosstodon.org/@graphile",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/GraphileHQ",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: `https://github.com/${organizationName}/${projectName}`,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Graphile Ltd. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["bash"],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "TA4XCORFFD",

        // Public API key: it is safe to commit it
        apiKey: "460af1135480a81ded64853450606e7c",
        indexName: "build-graphile",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        //... other Algolia params
      },
    }),
  trailingSlash: undefined,
  clientModules: [require.resolve("./docusaurus.client.js")],
  markdown: {
    mdx1Compat: {
      comments: true,
      admonitions: true,
    },
  },
};

module.exports = config;
