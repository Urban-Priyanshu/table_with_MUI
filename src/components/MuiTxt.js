import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function MuiTxt() {
  return (
    <div
      style={{ width: " 1000px", margin: "auto", height: "100px", top: "80px" }}
    >
      <Grid container spacing={2}>
        <Grid item s={4}>
          <Typography variant="h4" component="div">
            Your Personalized Tax Settings
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
