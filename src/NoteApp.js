import React from "react";
import "./NoteApp.css";
import ActiveNotes from "./components/ActiveNotes";
import AddNote from "./components/AddNote";
import Header from "./components/Header";
import { getInitialData } from "./utils/index";
import ArchivedNotes from "./components/ArchivedNotes";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNotes: getInitialData(),
      archivedNotes: [],
      searchResult: [],
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.activeNotes.filter((note) => note.id !== id);
    this.setState({ activeNotes: notes });
  }

  onArchiveHandler(id, newStatus) {
    let allNotes = this.state.activeNotes;
    allNotes = allNotes.map((note) => {
      if (note.id === id) {
        console.log("in here");
        note.archived = !newStatus;
      }
      return note;
    });
    this.setState({ activeNotes: allNotes });
  }

  onAddNoteHandler({ noteName, noteBody }) {
    this.setState((prevState) => {
      return {
        activeNotes: [
          ...prevState.activeNotes,
          {
            id: +new Date(),
            title: noteName,
            body: noteBody,
            archived: false,
            createdAt: Date.now(),
          },
        ],
      };
    });
  }

  onSearchNoteHandler({ searchQuery }) {
    const searchString = searchQuery.toLowerCase();
    const filteredNotes = this.state.activeNotes.filter((note) => {
      return note.title.toLowerCase().includes(searchString);
    });
    if(searchQuery !== '') {
      this.setState({ searchResult: filteredNotes });
    } else if(searchQuery === '') {
      this.setState({ searchResult: [] });
    }

    console.log(searchQuery)
  }

  render() {
    console.log(this.state.searchResult)
    return (
      <div className="App">
        <Header searchNote={this.onSearchNoteHandler} />

        <div className="app__body">
          <AddNote addNote={this.onAddNoteHandler} />

          {this.state.searchResult.length > 0 ? (
            <>
            <ActiveNotes
              notes={this.state.searchResult}
              onArchive={this.onArchiveHandler}
              onDelete={this.onDeleteHandler}
            />
            <ArchivedNotes
              notes={this.state.searchResult}
              onArchive={this.onArchiveHandler}
              onDelete={this.onDeleteHandler}
            />
          </>
          ) : (
            <>
              <ActiveNotes
                notes={this.state.activeNotes}
                onArchive={this.onArchiveHandler}
                onDelete={this.onDeleteHandler}
              />
              <ArchivedNotes
                notes={this.state.activeNotes}
                onArchive={this.onArchiveHandler}
                onDelete={this.onDeleteHandler}
              />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default NoteApp;
