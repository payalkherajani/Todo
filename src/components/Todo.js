import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoElement from "./TodoElement.js";

//Material Ui
import { withStyles } from "@material-ui/styles";
import { Grid, Box, Button, TextField, Typography } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const styles = () => ({
  maindiv: {
    padding: "5px",
  },
  field: {
    width: "150%",
  },
  heading: {
    marginTop: "2rem",
  },
  title: {
    color: "rgba(175, 47, 47, 0.15)",
    fontSize: "100px",
  },
});

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      deleteTodo: [],
      value: 0,
      currentTask: {
        task: "",
        id: "",
      },
    };
  }

  tabhandleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

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

    [...this.state.todo].forEach((d) => {
      if (d.id === cid) {
        this.state.deleteTodo.push(d);
      }
    });

    this.setState({ todo: delTodo });
    this.setState({ deleteTodo: this.state.deleteTodo });
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

  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        direction="column"
        xs={12}
        alignItems="center"
        justify="center"
        spacing={10}
      >
        <Grid item className={classes.heading}>
          <Typography className={classes.title}>todos</Typography>
        </Grid>
        <Box className={classes.maindiv}>
          <Grid container spacing={5} direction="column">
            <Grid item>
              <Box style={{ display: "flex", gap: "20px", width: "100%" }}>
                <TextField
                  label="What needs to be done"
                  variant="outlined"
                  value={this.state.currentTask.task}
                  onChange={this.handleChange}
                  InputProps={{
                    endAdornment: <ArrowForwardIosIcon fontSize="small" />,
                  }}
                  className={classes.field}
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
            <Grid item>
              <AppBar position="static" color="default">
                <Tabs
                  value={this.state.value}
                  onChange={this.tabhandleChange}
                  aria-label="simple tabs example"
                >
                  <Tab label="All" {...a11yProps(0)} />
                  <Tab label="Active" {...a11yProps(1)} />
                  <Tab label="Completed" {...a11yProps(2)} />
                </Tabs>
              </AppBar>
              <TabPanel value={this.state.value} index={0}>
                {this.state.todo.length !== 0
                  ? this.state.todo.map((item, index) => {
                      return (
                        <div key={item.id}>
                          <TodoElement
                            item={item}
                            deleteTask={this.deleteTask}
                            editTodo={this.editTodo}
                          />
                        </div>
                      );
                    })
                  : null}
              </TabPanel>
            </Grid>
            <Box>
              <TabPanel value={this.state.value} index={1}>
                {this.state.todo.length !== 0
                  ? this.state.todo.map((item, index) => {
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
                    })
                  : null}
              </TabPanel>
              <TabPanel value={this.state.value} index={2}>
                {this.state.deleteTodo.length !== 0 ? (
                  <div>
                    {this.state.deleteTodo.map((item, index) => {
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
                    })}
                  </div>
                ) : (
                  <p> No Task Deleted </p>
                )}
              </TabPanel>
            </Box>
          </Grid>
        </Box>
      </Grid>
    );
  }
}

Todo.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Todo);
