import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { IconButton } from "@material-ui/core";

class TodoElement extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      isEditing: false,
      val: this.props.item,
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
                this.props.edit(this.props.index, this.state.val);
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

export default TodoElement;
