import { mockMyProfileQuery } from "@misterdonut/graphql";

export const mockMyProfile = mockMyProfileQuery((_, res, ctx) =>
  res(
    ctx.delay(300),
    ctx.data({
      profileCollection: {
        edges: [
          {
            node: {
              id: "id",
              username: "username",
              avatar_url:
                "https://www.gravatar.com/avatar/3ff690942a6e16e08d2fc2ecb9e0af6c?d=mp",
            },
          },
        ],
      },
    })
  )
);
