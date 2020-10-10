import React, { Component } from "react";


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
      val: this.props.item.task,
    };
  }

  render() {
    // console.log(this.props.item);
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
              value={this.state.val}
              onChange={(e) => this.setState({ val: e.target.value })}
              className={classes.text}
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
          </Grid>
        ) : (
          <Grid item className={classes.text}>
            <Checkbox
              inputProps={{ "aria-label": "uncontrolled-checkbox" }}
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
          </Grid>
        )}
        <Grid item>
          <IconButton
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
              <EditIcon fontSize="small" color="primary" />
            ) : (
              <EditIcon fontSize="small" color="disabled" />
            )}
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
