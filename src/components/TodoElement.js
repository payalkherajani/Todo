import React, { Component } from "react";
import PropTypes from "prop-types";

//Material Ui
import { withStyles } from "@material-ui/styles";
import { Grid, Checkbox } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { IconButton } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const styles = () => ({
  maindiv: {
    gap: "10px",
    padding: "10px",
  },
  text: {
    color: "#f50057",
    fontSize: "20px",
    textTransform: "uppercase",
    display: "flex",
  },
});

class TodoElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      val: this.props.item,
      checked: false,
    };
  }

  checkhandleChange = (event) => {
    this.setState({ checked: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        className={classes.maindiv}
        alignItems="center"
        justify="space-between"
      >
        {this.state.isEditing === true ? (
          <Grid item style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              value={this.state.val.task}
              onChange={(e) => this.setState({ val: e.target.value })}
              className={classes.text}
            />
            <button
              type="submit"
              onClick={() => {
                this.props.editTodo(this.props.item.id, this.state.val.task);
                this.setState({ isEditing: false });
              }}
            >
              Edit
            </button>
          </Grid>
        ) : (
          <Grid item className={classes.text}>
            <Checkbox
              inputProps={{ "aria-label": "uncontrolled-checkbox" }}
              onChange={this.checkhandleChange}
              onClick={() => {
                this.props.checkFun(this.state.val.id);
              }}
            />
            {this.state.checked === true ? (
              <div style={{ textDecoration: "line-through" }}>
                {this.state.val.task}
              </div>
            ) : (
              <div>{this.state.val.task}</div>
            )}
          </Grid>
        )}
        <Grid item>
          <IconButton
            aria-label="edit"
            onClick={() => {
              this.setState({ isEditing: true });
            }}
          >
            <EditIcon fontSize="small" color="primary" />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => this.props.deleteTask(this.props.item.id)}
          >
            <DeleteIcon fontSize="small" style={{ color: green[500] }} />
          </IconButton>
        </Grid>
      </Grid>
    );
  }
}

TodoElement.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoElement);
