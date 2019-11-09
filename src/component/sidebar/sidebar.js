import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SideBarItemComponent from '../sideitem/sideitem';

export default withStyles(styles)(SideBarComponent) class SideBarComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return <div>Sidebar</div>;
  }
}