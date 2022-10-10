/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Title } from "../Title";

const preventDefault = (event: React.MouseEvent) => {
  event.preventDefault();
};

export const Deposits = () => (
  <>
    <Title>Recent Deposits</Title>
    <Typography component="p" variant="h4">
      $3,024.00
    </Typography>
    <Typography color="text.secondary" sx={{ flex: 1 }}>
      on 15 March, 2019
    </Typography>
    <div>
      <Link color="primary" href="#" onClick={preventDefault}>
        View balance
      </Link>
    </div>
  </>
);