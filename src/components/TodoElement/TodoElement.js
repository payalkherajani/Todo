import React, { Component } from "react";
import style from "./style.module.css"

console.log(style)
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
      <div className={style.todoelementcontainer}>
        {this.state.isEditing === true ? (
          <div className={style.todoelementdiv1}>
            <input
              type="text"
              className={style.todoelementinput}
              value={this.state.val}
              onChange={(e) => this.setState({ val: e.target.value })}
            />
            <button
              type="submit"
              className={style.todoelementbutton}
              onClick={() => {
                this.props.editTodo(this.props.item.id, this.state.val);
                this.setState({ isEditing: false });
              }}
            >
              Edit
            </button>
          </div>
        ) : (
          <div className={style.todoelementcheckboxtext}>
            <input
              type="checkbox"
              onChange={() => this.props.checkFun(this.props.item.id)}
              checked={this.props.item.isCompleted}
              className={style.todoelementcheckbox}
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
        <div className={style.editdelbuttons}>
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
              <i className="fas fa-pen" style={{border:"none",backgroundColor: "#fff"}}></i>
            ) : (
              <i class="fas fa-pen" style={{opacity: "0.5",pointerEvents: "none"}}></i>  //disabled
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
