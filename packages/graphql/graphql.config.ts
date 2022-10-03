import type { IGraphQLConfig } from "graphql-config";
import { config } from "dotenv-flow";
import path from "path";

config({ path: path.join(__dirname, "../../apps/web/") });

/** @type {import('graphql-config').IGraphQLConfig} */
const graphqlConfig: IGraphQLConfig = {
  schema: [
    {
      [`${process.env.NEXT_PUBLIC_SUPABASE_URL}/graphql/v1`]: {
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
          authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        },
      },
    },
  ],
  documents: "../ui/**/*.graphql",
  extensions: {
    diff: {
      baseSchema: path.join(__dirname, "../ui/schema.graphql"),
    },
    codegen: {
      overwrite: true,
      config: {
        scalars: {
          URI: "string",
        },
      },
      generates: {
        "../ui/schema.graphql": {
          plugins: ["schema-ast"],
        },
        "generated/apolloHook.ts": {
          config: {
            enumsAsTypes: true,
          },
          plugins: [
            "typescript",
            "typescript-operations",
            "typescript-react-apollo",
          ],
        },
        "generated/mockHandler.ts": {
          config: {
            enumsAsTypes: true,
            noExport: true,
          },
          plugins: ["typescript", "typescript-operations", "typescript-msw"],
        },
      },
    },
  },
};
export default graphqlConfig;
