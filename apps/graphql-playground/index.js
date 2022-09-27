const path = require('path');
require("dotenv-flow").config({ path: path.join(__dirname, "../web/") });

const express = require('express')
const expressPlayground =
  require("graphql-playground-middleware-express").default;

const PORT = process.env.PORT || 4000;

express()
  .get(
    "/playground",
    expressPlayground({
      endpoint: process.env.NEXT_PUBLIC_SUPABASE_API_ENDPOINT,
      settings: {
        "request.globalHeaders": {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_API_PROJECT_API_KEYS,
          authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_API_PROJECT_API_KEYS}`,
        },
      },
    })
  )
  .listen(PORT);

  console.log(
    `Serving the GraphQL Playground on http://localhost:${PORT}/playground`
  );