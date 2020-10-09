import React, { Component } from "react";

// Material - ui
import { Grid, TextField, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = () => ({
  heading: {
    marginTop: "2rem",
  },
  title: {
    color: "rgba(175, 47, 47, 0.15)",
    fontSize: "100px",
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNum: "",
      pass: "",
    };
  }

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };

  render() {
    const { classes } = this.props;
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

          <Grid container item xs={6} justify="center" alignItems="center">
            <TextField
              fullWidth={true}
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              name="phoneNum"
              value={this.state.phoneNum}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid container item xs={6}>
            <TextField
              fullWidth={true}
              id="standard-adornment-password"
              type="password"
              label="Password"
              variant="outlined"
              name="pass"
              value={this.state.pass}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid container item xs={6}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth={true}
              onClick={() => {
                if (this.state.phoneNum && this.state.pass !== "") {
                  let token = `todo${this.state.phoneNum}todo${this.state.pass}`;
                  // console.log("token", token);
                  localStorage.setItem("token", token);
                } else {
                  alert("Please enter Phone Number and Password both");
                }
              }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default withStyles(styles)(Login);
