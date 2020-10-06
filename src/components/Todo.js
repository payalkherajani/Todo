import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import FormatListBulletedSharpIcon from "@material-ui/icons/FormatListBulletedSharp";
import TodoElement from "./TodoElement";

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

  addTask = () => {
    this.setState({ todo: [...this.state.todo, this.state.task] });
    this.setState({ task: "" });
  };

  del = (index) => {
    const delTodo = [...this.state.todo];
    delTodo.splice(index, 1);
    this.setState({ todo: delTodo });
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
            ? this.state.todo.map((item, index) => {
                return (
                  <div key={item}>
                    <TodoElement
                      item={item}
                      index={index}
                      del={this.del}
                      edit={this.state.todo}
                    />
                  </div>
                );
              })
            : null}
        </Grid>
      </div>
    );
  }
}

export default Todo;
