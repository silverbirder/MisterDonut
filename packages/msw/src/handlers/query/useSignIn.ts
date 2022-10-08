import { rest } from "msw";

export const mockSignIn = rest.post("/auth/v1/token", (req, res, ctx) =>
  res(
    ctx.json({
      access_token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjY1MTk5NDc4LCJzdWIiOiJ4eHh4eHh4eC1iNTUyLTQxMjMtYTg3MC1jZDUxOWFiNzhkZDIiLCJlbWFpbCI6Inh4eHhAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwic2Vzc2lvbl9pZCI6Inh4eHh4eHh4LWUyZmEtNGI5Ny1iNTAzLTc3ODAyZTdiNDE5MiJ9.L05s-jmthBAGbeyqIsrOA0jbY93GqbM3WzJ6-TaxpQM",
      token_type: "bearer",
      expires_in: 3600,
      refresh_token: "6GuF1SQlOAKVHCKu3omnKQ",
      user: {
        id: "xxxxxxxx-b552-4123-a870-cd519ab78dd2",
        aud: "authenticated",
        role: "authenticated",
        email: "xxxx@gmail.com",
        email_confirmed_at: "2022-10-04T12:07:38.864166Z",
        phone: "",
        confirmation_sent_at: "2022-10-04T12:07:20.400586Z",
        confirmed_at: "2022-10-04T12:07:38.864166Z",
        last_sign_in_at: "2022-10-08T02:24:38.59701251Z",
        app_metadata: { provider: "email", providers: ["email"] },
        user_metadata: {},
        identities: [
          {
            id: "xxxxxxxx-b552-4123-a870-cd519ab78dd2",
            user_id: "xxxxxxxx-b552-4123-a870-cd519ab78dd2",
            identity_data: {
              sub: "xxxxxxxx-b552-4123-a870-cd519ab78dd2",
            },
            provider: "email",
            last_sign_in_at: "2022-10-04T12:07:20.398052Z",
            created_at: "2022-10-04T12:07:20.398097Z",
            updated_at: "2022-10-04T12:07:20.398102Z",
          },
        ],
        created_at: "2022-10-04T12:07:20.389372Z",
        updated_at: "2022-10-08T02:24:38.599677Z",
      },
    })
  )
);
