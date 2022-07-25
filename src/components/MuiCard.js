import { Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
// import grey from "@material-ui/core/colors/grey";

export const MuiCard = () => {
  return (
    <>
      <div style={{ width: " 1000px", margin: "auto", height: "485px" }}>
        <Grid container spacing={9}>
          <Grid item xs={6}>
            <Card
              sx={{ minWidth: 500 }}
              style={{
                backgroundColor: "#f5f5f5",
                boxShadow: "7px 7px 8px lightgrey",
              }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 20 }}
                  color="text.primary"
                  gutterBottom
                >
                  <b>Estimated Tax Rates:</b> <br></br> <br />
                  <hr />
                </Typography>
                <Typography color="text.primary">
                  <p>
                    Federal Short Term Capital Gains:{" "}
                    <p style={{ textAlign: "right", marginTop: "-5%" }}>
                      {" "}
                      37.00%
                    </p>
                  </p>

                  <hr />
                </Typography>
                <Typography color="text.primary">
                  <p>
                    State Short Term Capital Gains:{" "}
                    <p style={{ textAlign: "right", marginTop: "-5%" }}>
                      {" "}
                      5.00%
                    </p>
                  </p>
                  <hr />
                </Typography>
                <Typography color="text.primary">
                  <p>
                    Federal Long Term Capital Gains:{" "}
                    <p style={{ textAlign: "right", marginTop: "-5%" }}>
                      {" "}
                      20.00%
                    </p>
                  </p>
                  <hr />
                </Typography>
                <Typography color="text.primary" gutterBottom>
                  <p>
                    State Short Term Capital Gains:
                    <p style={{ textAlign: "right", marginTop: "-5%" }}>
                      {" "}
                      5.00%
                    </p>
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card
              sx={{ minWidth: 500 }}
              style={{
                backgroundColor: "#f5f5f5",
                boxShadow: "7px 7px 8px lightgrey",
              }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 20 }}
                  color="text.primary"
                  gutterBottom
                >
                  <b />
                  <b>Tax Summary:</b> <br></br> <br />
                  <hr />
                </Typography>
                <Typography color="text.primary">
                  <p>
                    Taxable Income:{" "}
                    <p style={{ textAlign: "right", marginTop: "-5%" }}>
                      {" "}
                      $650,000
                    </p>
                  </p>
                  <hr />
                </Typography>
                <Typography color="text.primary">
                  <p>
                    Tax Filing Status:{" "}
                    <p style={{ textAlign: "right", marginTop: "-5%" }}>
                      Married Filing Jointly{" "}
                    </p>
                  </p>
                  <hr />
                </Typography>
                <Typography color="text.primary">
                  <p>
                    State of Residence:{" "}
                    <p style={{ textAlign: "right", marginTop: "-5%" }}>
                      {" "}
                      Massachusetts
                    </p>
                  </p>
                  <hr />
                </Typography>
                <Typography color="text.primary">
                  <p>
                    Tax Reserve:{" "}
                    <p style={{ textAlign: "right", marginTop: "-5%" }}> $0</p>
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
