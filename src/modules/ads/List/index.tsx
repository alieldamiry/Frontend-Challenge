import {
  Box,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tooltip,
  IconButton,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Edit from "../Edit";

const AdsList = () => {
  return (
    <Box sx={{ p: 3 }}>
      <TableContainer
        component={Paper}
        sx={{ p: 3, borderRadius: "15px" }}
        elevation={0}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ fontWeight: "bold" }}>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>Link</TableCell>
              <TableCell>from</TableCell>
              <TableCell>to</TableCell>
              <TableCell>Controls</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Video
              </TableCell>
              <TableCell component="th" scope="row">
                <a href={"http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4"}>
                  http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4
                </a>
              </TableCell>
              <TableCell>12/05/2021 06:25:00 PM</TableCell>
              <TableCell>12/05/2021 06:27:00 PM</TableCell>
              <TableCell>
                <Edit />
                <Tooltip title="Delete" placement="top" arrow>
                  <IconButton color="error">
                    <DeleteOutlineIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Box
          sx={{
            m: 3,
            display: "flex",
            justifyContent: "center",
          }}
        ></Box>
      </TableContainer>
    </Box>
  );
};

export default AdsList;
