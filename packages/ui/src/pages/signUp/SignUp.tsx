import { Container, Box, Skeleton } from "@mui/material";

export { SignUp as SignUpPage } from "@ui/features/account";

export const SignUpPageSkeleton = () => (
  <Container component="main" maxWidth="xs">
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Skeleton variant="rectangular" height="300" width="300" />
    </Box>
  </Container>
);
