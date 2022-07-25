import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { grey } from "@material-ui/core/colors";

export default function MuiTbl() {
  return (
    <>
      <AppBar
        position="static"
        style={{ backgroundColor: grey[900], height: "auto" }}
      >
        <Toolbar>
          <Typography variant="subtitle" component="div" sx={{ flexGrow: 0.1 }}>
            <b>Advisor</b>: Ed Visor
          </Typography>
          <Typography variant="subtitle" component="div" sx={{ flexGrow: 1 }}>
            <b>Client </b>: Madison Smith
          </Typography>
          <Typography variant="h6">Vestmark|V A S T.</Typography>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <br />
    </>
  );
}
