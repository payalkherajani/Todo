import React, { Component } from "react";
import TodoElement from "../../components/TodoElement/TodoElement.js"
import { Redirect } from "react-router-dom";
import style from "./style.module.css"

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      value: 0,
      task: "",
      navigate: false,
    };
  }

  TodoFunction = () => {
    let todoitems;
    if (this.state.value === 0) {
      todoitems = this.state.todo.filter((t) => {
        return t;
      });
    } else if (this.state.value === 1) {
      todoitems = this.state.todo.filter((t) => {
        return t.isCompleted !== true;
      });
    } else if (this.state.value === 2) {
      todoitems = this.state.todo.filter((t) => {
        return t.isCompleted === true;
      });
    }

    return todoitems;
  };

  checkFun = (id) => {
    const filteredtodo = [...this.state.todo].map((at) => {
      if (at.id === id) {
        at.isCompleted = true;
        return at;
      } else {
        return at;
      }
    });
    this.setState({ todo: filteredtodo });
  };

  

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  addItem = () => {
    const newTask = {
      id: Date.now(),
      task: this.state.task,
      isCompleted: false,
    };
    const newtodo = [...this.state.todo, newTask];
    this.setState({
      todo: newtodo,
      task: "",
      value: 0
    });
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

    this.setState({
      todo: edTodo,
    });
  };

  logout = () => {
    localStorage.clear("token");
    this.setState({ navigate: true });
  };

  render() {
    const todoitems = this.TodoFunction();

    const { navigate } = this.state;
    if (navigate) {
      return <Redirect to="/" push={true} />;
    }

    return (
      <div className={style.todomaindiv}>
        <div className={style.name}><strong>{this.props.location.state.detail.name} </strong></div>
        <div className={style.todologoutdiv}>
          {" "}
          <button onClick={this.logout} className={style.todologoutbutton}> {" "}
          <i className="fas fa-sign-out-alt"></i>
            Logout
          </button>
        </div>
        <div className={style.todocontainer}>
          <div className={style.todoheadingdiv}>
            <h1 className={style.todoheading}>todos</h1>
          </div>
          <div className={style.todocontainer2}>
            <div className={style.todowrapper1}>
                <div className={style.inputbuttondiv}>
                  <input
                   className={style.inputlogin}
                    value={this.state.task}
                    onChange={this.handleChange}
                    placeholder="What needs to be done ?"
                  ></input>
                  <button
                   className={style.todoaddbutton}
                    variant="contained"
                    color="secondary"
                    onClick={this.addItem}
                  >
                    Add
                  </button>
                </div>
              <div className={style.todowrapper2}>
                <div className={style.alltag}>
                  <button className={style.allbutton}  onClick={() => this.setState({value: 0})}>All</button>
                  <div className={style.alltodoitems}>
                  {todoitems.length !== 0 && this.state.value === 0
                    ? todoitems.map((item) => {
                        return (
                          <div key={item.id}>
                            <TodoElement
                              item={item}
                              deleteTask={this.deleteTask}
                              editTodo={this.editTodo}
                              checkFun={this.checkFun}
                            />
                          </div>
                        );
                      })
                    : null}
                  </div>
                </div>
                <div className={style.activetag}>
                  <button className={style.activebutton} onClick={() => this.setState({value: 1})}>Active</button>
                  <div className={style.activetodoitems}>
                  {todoitems.length !== 0 && this.state.value === 1
                    ? todoitems.map((item, index) => {
                        return (
                          <div key={index} className="internal-todoitems">
                            {item.task}
                          </div>
                        );
                      })
                    : null}
                  </div>
                </div>
                <div className={style.completedtag}>
                  <button className={style.completedbutton}  onClick={() => this.setState({value: 2})}>Completed</button>
                  <div className={style.completedtodoitems}>
                  {
                  todoitems.length !== 0 && this.state.value === 2 ? 
                      todoitems.map((item, index) => {
                      if (item !== undefined) {
                        return (
                          <div
                           className="internal-todoitems"
                           style={{textDecoration: "line-through"}}
                            key={index}
                          >
                            {item.task}
                          </div>
                        );
                      }
                    })
                 : null }
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo
