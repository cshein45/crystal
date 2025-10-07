/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "html",
      value: "<h4>OVERVIEW</h4>",
      defaultStyle: false,
    },
    "index",
    // TODO: "examples",
    "requirements",
    "usage",
    "customization-overview",
    "performance",
    "required-knowledge",
    {
      type: "html",
      value: "<h4>USAGE</h4>",
      defaultStyle: false,
    },
    "usage-cli",
    "usage-library",
    "usage-schema",
    "config",
    {
      type: "html",
      value: "<h4>OPERATION</h4>",
      defaultStyle: false,
    },
    "quick-start-guide",
    "registry",
    "inflection",
    "namespaces",
    {
      type: "category",
      label: "Tables",
      collapsed: false,
      link: {
        type: "doc",
        id: "tables",
      },
      items: [
        "relations",
        "connections",
        "filtering",
        "crud-mutations",
        "node-id",
      ],
    },
    {
      type: "category",
      label: "Functions",
      link: {
        type: "doc",
        id: "functions",
      },
      items: [
        "computed-columns",
        "custom-queries",
        "custom-mutations",
        "function-restrictions",
        "function-gallery",
      ],
    },
    "enums",
    "views",
    "polymorphism",
    "refs",
    "aggregates",
    "postgresql-indexes",
    "behavior",
    "security",
    {
      type: "category",
      label: "Realtime",
      link: {
        type: "doc",
        id: "realtime",
      },
      items: ["subscriptions", "live-queries"],
    },
    "background-tasks",
    "exporting-schema",
    "reserved-keywords",
    "debugging",
    {
      type: "html",
      value: "<h4>CUSTOMIZING</h4>",
      defaultStyle: false,
    },
    {
      type: "category",
      label: "Smart tags",
      link: {
        type: "doc",
        id: "smart-tags",
      },
      items: ["smart-tags-file", "smart-comments"],
    },
    {
      type: "category",
      label: "Schema plugins",
      collapsed: false,
      link: {
        type: "doc",
        id: "extending",
      },
      items: [
        "adding-and-replacing-inflectors",
        "change-nullability",
        "extend-schema",
        "process-schema",
        "wrap-plans",
        "add-pg-table-condition",
        "add-pg-table-order-by",
        "pg-smart-tags",
        "extending-raw",
        "plugin-gallery",
        "community-plugins",
      ],
    },
    "plugins",
    {
      type: "html",
      value: "<h4>GUIDES</h4>",
      defaultStyle: false,
    },
    "postgresql-schema-design",
    "evaluating",
    "best-practices",
    "grafast-for-postgraphile-users",
    "production",
    "jwt-guide",
    "jwk-verification",
    "default-role",
    "testing-jest",
    "bundling-webpack",
    "multiple-schemas",
    "running-postgraphile-in-docker",
    "running-postgraphile-as-a-library-in-docker",
    {
      type: "category",
      label: "Migrating from V4",
      link: {
        type: "doc",
        id: "migrating-from-v4/index",
      },
      items: [
        "migrating-from-v4/v5-new-feature-summary",
        "migrating-from-v4/make-plugin-by-combining-plugins",
        "migrating-from-v4/make-wrap-resolvers-plugin",
        "migrating-from-v4/make-add-inflectors-plugin",
        "migrating-from-v4/make-extend-schema-plugin",
        "migrating-from-v4/make-add-pg-table-condition-plugin",
        "migrating-from-v4/make-add-pg-table-order-by-plugin",
        "migrating-from-v4/migrating-custom-plugins",
      ],
    },
    {
      type: "html",
      value: "<h4>DEPLOYING</h4>",
      defaultStyle: false,
    },
    "deploying-heroku",
    "deploying-docker",
    "deploying-lambda",
    "deploying-gcp",
    {
      type: "html",
      value: "<h4>COMMUNITY</h4>",
      defaultStyle: false,
    },
    "community-contributions",
    "community-chat",
    "code-of-conduct",
    {
      type: "html",
      value: "<h4>FAQ</h4>",
      defaultStyle: false,
    },
    "introspection",
    "why-nullable",
    "versioning-policy",
  ],
};

module.exports = sidebars;
