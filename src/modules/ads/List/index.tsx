import {
  Box,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Edit from "../Edit";
import Delete from "../Delete";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { useEffect } from "react";
import { fetchAdds } from "src/redux/slices/adsSlice";

const AdsList = () => {
  const dispatch = useAppDispatch();
  const { adsList } = useAppSelector((state) => state.ads);

  useEffect(() => {
    dispatch(fetchAdds());
  }, []);

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
            {adsList?.map((ad: any) => (
              <TableRow
                key={ad.from_time}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {ad.image ? "Image" : "Video"}
                </TableCell>
                <TableCell component="th" scope="row">
                  <a href={ad.image || ad.video}>{ad.image || ad.video}</a>
                </TableCell>
                <TableCell>{ad.from_time}</TableCell>
                <TableCell>{ad.to_time}</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex" }}>
                    <Edit />
                    <Delete />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
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
