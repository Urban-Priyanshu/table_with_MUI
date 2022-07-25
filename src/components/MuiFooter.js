import React from "react";
import { Grid, Typography } from "@mui/material";

export const MuiFooter = () => {
  return (
    <>
      <footer style={{ marginLeft: "170px", marginRight: "170px" }}>
        <hr />
      </footer>
      <Grid>
        <Grid>
          <Typography
            marginTop={"10px"}
            marginLeft={"170px"}
            marginRight={"170px"}
          >
            <b>Ref: xxxxxx </b>
          </Typography>
        </Grid>
        <Grid align="center" marginTop={"-25px"}>
          <Typography>
            <b>Page#</b>
          </Typography>
        </Grid>
        <Grid
          style={{
            textAlign: "right",
            marginTop: "-25px",
            marginLeft: "170px",
            marginRight: "170px",
          }}
        >
          <Typography>
            {" "}
            <b>00/00/00</b>{" "}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
