import React from "react";
import './AddNote.css';

class AddNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noteName: "",
      noteBody: "",
      maxChar: 50,
      currChar: 0,
    };


    this.onNoteTitleChangeHandler = this.onNoteTitleChangeHandler.bind(this);
    this.onNoteBodyChangeHandler = this.onNoteBodyChangeHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNoteTitleChangeHandler(e) {
    this.setState(() => {
      return {
        noteName: e.target.value,
        currChar: e.target.value.length
      }
    });
  }

  onNoteBodyChangeHandler(e) {
    this.maxChar -= e.target.value.length;
    this.setState((prevState) => {
      return {
        ...prevState,
        noteBody: e.target.value,
      }
    });
  }

  onSubmitEventHandler(e) {
    e.preventDefault();
    this.props.addNote(this.state);
    this.setState({ noteName: '', noteBody: ''});
  }

  render() {
    return (
      <div className="addNote">
        <h2 className="addNote__title">Buat catatan</h2>

        <form className="addNote__formInput" onSubmit={this.onSubmitEventHandler}>
          <p className="addNote__maxChar">Sisa karakter: {this.state.maxChar - this.state.currChar}</p>
          <input
            onChange={this.onNoteTitleChangeHandler}
            type="text"
            className="addNote__noteTitle"
            value={this.state.noteName}
            placeholder="Ini adalah judul ..."
            maxLength='50'
            required
          />
          <textarea
            onChange={this.onNoteBodyChangeHandler}
            value={this.state.noteBody}
            className="addNote__noteBody"
            placeholder="Tuliskan catatanmu disini ..."
            cols="30"
            rows="10"
            required
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default AddNote;
