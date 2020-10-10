import React, { Component } from "react";
import TodoElement from "../../components/TodoElement.js";
import { Redirect } from "react-router-dom";


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
      todoitems = this.state.todo.filter((t, index) => {
        return t;
      });
    } else if (this.state.value === 1) {
      todoitems = this.state.todo.filter((t, index) => {
        return t.isCompleted !== true;
      });
    } else if (this.state.value === 2) {
      todoitems = this.state.todo.filter((t, index) => {
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
      <div>
        <div>
          {" "}
          <button onClick={this.logout}>
          <i className="fas fa-sign-out-alt"></i>
            Logout
          </button>
        </div>
        <div>
          <div>
            <h1>todos</h1>
          </div>
          <div>
            <div>
              <div>
                <div style={{ display: "flex", gap: "20px", width: "100%" }}>
                  <input
                    value={this.state.task}
                    onChange={this.handleChange}
                  ></input>
                  <button
                    variant="contained"
                    color="secondary"
                    onClick={this.addItem}
                  >
                    Add
                  </button>
                </div>
              </div>
              <div>
                <div>
                  <button onClick={() => this.setState({value: 0})}>All</button>
                  <div>
                  {todoitems.length !== 0
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
                <div>
                  <button onClick={() => this.setState({value: 1})}>Active</button>
                  <div>
                  {todoitems.length !== 0 && this.state.value === 1
                    ? todoitems.map((item, index) => {
                        return (
                          <div key={index}>
                            {item.task}
                          </div>
                        );
                      })
                    : null}
                  </div>
                </div>
                <div>
                  <button onClick={() => this.setState({value: 2})}>Completed</button>
                  <div>
                  {
                  todoitems.length !== 0 && this.state.value === 2 ? 
                      todoitems.map((item, index) => {
                      if (item !== undefined) {
                        return (
                          <div
                            key={index}
                            style={{
                              color: "#f50057",
                              fontSize: "20px",
                              textTransform: "uppercase",
                              padding: "10px",
                            }}
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
