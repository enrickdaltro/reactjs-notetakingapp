import React, { Component } from "react";
import ReactQuill from "react-quill";
import debounce from "../../helpers";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class EditorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      title: "",
      id: ""
    };
  }

  render() {
    // Destrucor out classes variable
    const { classes } = this.props;

    return (
      <div className={classes.editorContainer}>
        <ReactQuill
          value={this.state.text}
          onChange={this.updateBody}
        ></ReactQuill>
      </div>
    );
  }
  // fuction that is asynchronous that set some state, once state update we going to call an update fuction
  updateBody = async val => {
    this.setState({ text: val });
    this.update();
  };
  update = debounce(() => {
    console.log("updating database");
    // come back later
  }, 1500);
}

export default withStyles(styles)(EditorComponent);
