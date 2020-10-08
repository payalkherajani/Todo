import React from "react";

//Material-ui
import { Grid, TextField, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  heading: {
    marginTop: "2rem",
  },
  title: {
    color: "rgba(175, 47, 47, 0.15)",
    fontSize: "100px",
  },
});

const Login = () => {
  const classes = styles();

  return (
    <form>
      <Grid
        container
        direction="column"
        md={12}
        alignItems="center"
        justify="center"
        spacing={5}
      >
        <Grid item className={classes.heading}>
          <Typography className={classes.title}>login</Typography>
        </Grid>

        <Grid container item xs={6}>
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
          />
        </Grid>
        <Grid container item xs={6}>
          <Button variant="contained" color="secondary" fullWidth={true}>
            Login
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Login;
