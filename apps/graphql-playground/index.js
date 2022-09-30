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
      endpoint: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/graphql/v1`,
      settings: {
        "request.globalHeaders": {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
          authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        },
      },
    })
  )
  .listen(PORT);

  console.log(
    `Serving the GraphQL Playground on http://localhost:${PORT}/playground`
  );