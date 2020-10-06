import React, { Component } from "react";
import TodoElement from "./TodoElement.js";

//Material Ui
import { Grid, Box, Button, TextField } from "@material-ui/core";

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
    return (
      <div>
        <Grid container>
          <Grid item>
            <Box>
              <TextField
                label="Todo"
                variant="outlined"
                value={this.state.currentTask.task}
                onChange={this.handleChange}
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
          <Grid container>
            {this.state.todo.length !== 0
              ? this.state.todo.map((item, index) => {
                  return (
                    <div key={index}>
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
      </div>
    );
  }
}

export default Todo;
