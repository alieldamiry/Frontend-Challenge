import { Box, Button, Typography } from "@mui/material";
import AdsList from "./List";

const Ads = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          padding: "2rem",
          boxShadow: "0px 4px 28px rgb(0 0 0 / 5%) !important",
          borderRadius: "15px",
          width: "97%",
          margin: "1rem auto",
        }}
      >
        <Typography component="h2" variant="h5" sx={{ fontWeight: "bold" }}>
          {"Ads"}
        </Typography>
        <Button variant="contained">Create</Button>
      </Box>
      <AdsList />
    </>
  );
};

export default Ads;
