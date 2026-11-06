// tina/config.js
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.PUBLIC_TINA_CLIENT_ID || process.env.TINA_CLIENT_ID || process.env.TINACLIENTID,
  token: process.env.PUBLIC_TINA_TOKEN || process.env.TINA_TOKEN || process.env.TINATOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "assets",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        label: "Site Settings",
        name: "settings",
        path: "src/settings",
        format: "json",
        fields: [
          {
            type: "string",
            label: "Site Title",
            name: "title"
          },
          {
            type: "string",
            label: "Site subtitle",
            name: "subtitle"
          }
        ],
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        }
      },
      {
        name: "post",
        label: "Posts",
        path: "posts",
        defaultItem: () => ({
          title: "New Post",
          added: /* @__PURE__ */ new Date(),
          tags: []
        }),
        ui: {
          dateFormat: "MMM DD YYYY",
          filename: {
            readonly: false,
            slugify: (values) => {
              return values?.slug?.toLowerCase().replace(/ /g, "-");
            }
          }
        },
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
            isTitle: true,
            required: true
          },
          {
            label: "Slug",
            name: "slug",
            type: "string",
            required: true
          },
          {
            label: "Description",
            name: "description",
            type: "string",
            required: true
          },
          {
            label: "Tags",
            name: "tags",
            type: "string",
            list: true,
            options: [
              {
                value: "technical",
                label: "Technical"
              },
              {
                value: "advice",
                label: "Advice"
              },
              {
                value: "events",
                label: "Events"
              },
              {
                value: "learning",
                label: "Learning"
              },
              {
                value: "meta",
                label: "Meta"
              },
              {
                value: "work",
                label: "Work"
              },
              {
                value: "personal",
                label: "Personal"
              },
              {
                value: "projects",
                label: "Projects"
              }
            ]
          },
          {
            label: "Added",
            name: "added",
            type: "datetime",
            dateFormat: "MMM DD YYYY",
            required: true
          },
          {
            label: "Updated",
            name: "updated",
            type: "datetime",
            dateFormat: "MMM DD YYYY"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      }
    ]
  },
  search: {
    tina: {
      indexerToken: process.env.TINASEARCH,
      stopwordLanguages: ["eng"]
    },
    indexBatchSize: 50,
    maxSearchIndexFieldLength: 100
  }
});
export {
  config_default as default
};
