import React from "react";
import { Grid, TextField, Button, IconButton } from "@material-ui/core";
import FormatListBulletedSharpIcon from "@material-ui/icons/FormatListBulletedSharp";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      todo: [],
    };
  }

  handleChange = (e) => {
    this.setState({ task: e.target.value });
  };

  //   displayTodo = () => {
  //     const todoList = this.state.todo;
  //     console.log(todoList);
  //     if (todoList.length !== 0) {
  //       todoList.map((item) => {
  //         return <div>{item}</div>;
  //       });
  //     } else {
  //       return;
  //     }
  //   };
  addTask = () => {
    this.setState({ todo: [...this.state.todo, this.state.task] });
    this.setState({ task: "" });
  };

  editFun = (item) => {
    console.log("EDIT", item);
  };

  del = (item) => {
    console.log("DELETE", this.state);
  };
  render() {
    return (
      <div>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <FormatListBulletedSharpIcon />
          </Grid>
          <Grid item>
            <TextField
              label="Task"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <Button variant="contained" color="primary" onClick={this.addTask}>
              Add Task
            </Button>
          </Grid>
        </Grid>
        <Grid></Grid>
        <Grid container direction="column">
          {" "}
          {this.state.todo.length !== 0
            ? this.state.todo.map((item) => {
                return (
                  <div key={item}>
                    {item}
                    <IconButton aria-label="edit" onClick={this.editFun(item)}>
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={this.del(item)}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </div>
                );
              })
            : console.log("Empty Array")}
        </Grid>
      </div>
    );
  }
}

export default Todo;
