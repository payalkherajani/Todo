import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoElement from "./TodoElement.js";

//Material Ui
import { withStyles } from "@material-ui/styles";
import { Grid, Box, Button, TextField } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const styles = () => ({
  maindiv: {
    padding: "5px",
  },
  field: {
    width: "150%",
  },
});

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      currentTask: {
        task: "",
        id: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      currentTask: {
        task: e.target.value,
        id: Date.now(),
      },
    });
  };

  addItem = () => {
    const newTask = this.state.currentTask;
    if (newTask.task !== "") {
      const newtodo = [...this.state.todo, newTask];
      this.setState({
        todo: newtodo,
        currentTask: {
          task: "",
          id: "",
        },
      });
    }
  };

  deleteTask = (cid) => {
    const delTodo = [...this.state.todo].filter((dtod) => dtod.id !== cid);
    this.setState({ todo: delTodo });
  };

  editTodo = (cid, val) => {
    const edTodo = [...this.state.todo].map((edtodo) => {
      if (edtodo.id === cid) {
        edtodo.task = val;
      }
      return edtodo;
    });
    console.log(edTodo);
    this.setState({
      todo: edTodo,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.maindiv}>
        <Grid container spacing={5} direction="column">
          <Grid item>
            <Box style={{ display: "flex", gap: "20px", width: "100%" }}>
              <TextField
                label="What needs to be done"
                variant="outlined"
                value={this.state.currentTask.task}
                onChange={this.handleChange}
                InputProps={{
                  endAdornment: <ArrowForwardIosIcon fontSize="small" />,
                }}
                className={classes.field}
              ></TextField>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.addItem}
              >
                Add
              </Button>
            </Box>
          </Grid>
          <Grid item>
            {this.state.todo.length !== 0
              ? this.state.todo.map((item, index) => {
                  return (
                    <div key={item.id}>
                      <TodoElement
                        item={item}
                        deleteTask={this.deleteTask}
                        editTodo={this.editTodo}
                      />
                    </div>
                  );
                })
              : null}
            {/* <TodoElement
              todo={this.state.todo}
              deleteTask={this.deleteTask}
              editTask={this.edTodo}
            /> */}
          </Grid>
        </Grid>
      </Box>
    );
  }
}

Todo.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Todo);
