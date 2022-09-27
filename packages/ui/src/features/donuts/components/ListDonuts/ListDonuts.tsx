/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Image } from "@ui/lib";
import { useDonuts } from "../../hooks/useDonuts";

const columns: GridColDef[] = [
  {
    field: "img",
    headerName: "Img",
    renderCell: (params: GridRenderCellParams<string>) => (
      <Image src={params.value || ""} width={62} height={62} />
    ),
  },
  {
    field: "name",
    headerName: "Name",
    width: 300,
  },
  {
    field: "category",
    headerName: "Category",
  },
  {
    field: "price",
    headerName: "Price",
  },
  {
    field: "createdAt",
    headerName: "CreatedAt",
    type: "date",
  },
];

export const ListDonuts = () => {
  const { donuts } = useDonuts();
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={donuts}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
};
