import React, { Component } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { IconButton } from "@material-ui/core";

class TodoElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      val: this.props.item.task,
      newTodo: this.props.edit,
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
                this.props.editTodo(this.props.item.id, this.state.val);
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
          onClick={() => this.props.deleteTask(this.props.item.id)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
    );
  }
}

export default TodoElement;
