import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import SideBarItemComponent from "../sideitem/sideitem";

class SideBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addingNote: false,
      title: null
    };
  }

  render() {
    // destrucor out classes
    const { notes, classes, selectedNoteIndex } = this.props;

    if (notes) {
      return (
        <div className={classes.sidebarContainer}>
          <Button onClick={this.newNoteBtnClick} className={classes.newNoteBtn}>
            {this.state.addingNote ? "Cancel" : "New Note"}
          </Button>
          {this.state.addingNote ? (
            <div>
              <input
                type="text"
                className={classes.newNoteInput}
                placeholder="Enter note title"
                onKeyUp={e => this.updateTitle(e.target.value)}
              ></input>
              <button
                className={classes.newNoteSubmitBtn}
                onClick={this.newNote}
              >
                Submit Note
              </button>
            </div>
          ) : null}
          <List>
            {notes.map((_note, _index) => {
              return (
                <div key={_index}>
                  <SideBarItemComponent
                    _note={_note}
                    _index={_index}
                    selectedNoteIndex={selectedNoteIndex}
                    selectedNote={this.selectedNote}
                    deletedNote={this.deletedNote}
                  />
                  <Divider></Divider>
                </div>
              );
            })}
          </List>
        </div>
      );
    } else {
      return <div> </div>;
    }
  }

  newNoteBtnClick = () => {
    this.setState({ title: null, addingNote: !this.state.addingNote });
  };
  updateTitle = txt => {
    this.setState({ title: txt });
  };

  newNote = () => {
    console.log(this.state);
  };

  selectedNote = () => {
    console.log("select here");
  };

  deletedNote = () => {
    console.log("delete here");
  };
}

export default withStyles(styles)(SideBarComponent);
