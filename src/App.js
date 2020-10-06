import React from "react";
import Todo from "./components/Todo.js";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  heading: {
    marginTop: "2rem",
  },
  title: {
    color: "rgba(175, 47, 47, 0.15)",
    fontSize: "100px",
  },
});

function App() {
  const classess = useStyles();
  return (
    <div className="App">
      <Grid
        container
        direction="column"
        xs={12}
        alignItems="center"
        justify="center"
        spacing={10}
      >
        <Grid item className={classess.heading}>
          <Typography className={classess.title}>todos</Typography>
        </Grid>
        <Grid item>
          <Todo />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
