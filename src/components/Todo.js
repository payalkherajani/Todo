import React from "react";
import { Grid, TextField, Button, IconButton } from "@material-ui/core";
import FormatListBulletedSharpIcon from "@material-ui/icons/FormatListBulletedSharp";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

class TodoElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      val: this.props.item,
    };
  }

  render() {
    return (
      <div>
        {this.state.isEditing === true ? (
          <div>
            <input
              type="text"
              value={this.state.val}
              onChange={(e) => this.setState({ val: e.target.value })}
            />
            <button
              type="submit"
              onClick={() => {
                this.setState({ isEditing: false });
              }}
            >
              Edit
            </button>
          </div>
        ) : (
          <div>{this.state.val}</div>
        )}
        <IconButton
          aria-label="edit"
          onClick={() => {
            this.setState({ isEditing: true });
          }}
        >
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={() => this.props.del(this.props.index)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
    );
  }
}
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      todo: [],
      newVal: "",
    };
  }

  handleChange = (e) => {
    this.setState({ task: e.target.value });
  };

  addTask = () => {
    this.setState({ todo: [...this.state.todo, this.state.task] });
    this.setState({ task: "" });
  };
  editFun = (item, index) => {
    const edTodo = [...this.state.todo];
    // edTodo.map((e) => {
    //   if (e === item) {
    //     <TextField label={e} />;
    //   }
    // });

    // this.setState({ todo: edTodo });
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
                const f = () => {
                  this.editFun(item, index);
                };
                return (
                  <div key={item}>
                    <TodoElement
                      item={item}
                      index={index}
                      edit={this.editFun}
                      del={this.del}
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
