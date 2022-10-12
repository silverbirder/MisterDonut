import { Box, Skeleton } from "@mui/material";

export { ListDonuts as DonutsPage } from "@ui/features/donuts";

export const DonutsPageSkeleton = () => (
  <Box sx={{ height: 400, width: "100%" }}>
    <Skeleton variant="rectangular" width="100%" height={400} />
  </Box>
);
