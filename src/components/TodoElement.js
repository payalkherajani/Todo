import React, { Component } from "react";


class TodoElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      val: this.props.item.task,
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
          <div>
            <input
              type="checkbox"
              onChange={() => this.props.checkFun(this.props.item.id)}
              checked={this.props.item.isCompleted}
            />
            {this.props.item.isCompleted === true ? (
              <div style={{ textDecoration: "line-through" }}>
                {this.state.val}
              </div>
            ) : (
              <div>{this.state.val}</div>
            )}
          </div>
        )}
        <div>
          <button
            aria-label="edit"
            onClick={() => {
              if (this.props.item.isCompleted === false) {
                this.setState({ isEditing: true });
              } else {
                this.setState({ isEditing: false });
              }
            }}
          >
            {this.props.item.isCompleted === false ? (
              <i className="far fa-edit"></i>
            ) : (
              <i className="far fa-edit"></i>
            )}
          </button>
          <button
            aria-label="delete"
            onClick={() => this.props.deleteTask(this.props.item.id)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    );
  }
}



export default TodoElement
