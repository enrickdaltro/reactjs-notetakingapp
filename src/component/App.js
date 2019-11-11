import React, { Component } from "react";
import "./App.css";
import SideBarComponent from "./sidebar/sidebar";
import EditorComponent from "./editor/editor";

// Importing Firebase
const firebase = require("firebase");

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null
    };
  }

  render() {
    return (
      <div className="app-container">
        <SideBarComponent
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
        />
        <EditorComponent />
      </div>
    );
  }

  // Whenever App component is loaded succeful inside of the DOM,
  // this will be called automatcally, it`s part of react lifecycle.
  componentDidMount = () => {
    // Go inside firebase, grab all the notes and set with state in notes: null
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data["id"] = _doc.id; // data it`s a function that grabs data from the doc
          return data;
        }); // docs is a property of serverUpdate object being passed into our function
        // update state
        //update notes inside our state with notes variable that was create inside the mount
        console.log(notes);
        this.setState({ notes: notes });
      });
  };
}
