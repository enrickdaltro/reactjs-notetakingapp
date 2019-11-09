import React, { Component } from "react";
import ReactQuill from "react-quill";
import debounce from "../../helpers";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

export default withStyles(styles)(EditorComponent) class EditorComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return <div>Editor</div>;
  }
}
