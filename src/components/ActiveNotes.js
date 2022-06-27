import React from "react";
import "./ActiveNotes.css";
import NoteItem from "./NoteItem";

function ActiveNotes({ notes, onDelete, onArchive }) {

  function activeNotesLength() {
    const archived = false;
    const count = notes.filter(note => note.archived === archived).length;

    return count;
  }

  return (
    <div className="active-notes">
      <h2 className="active-notes__title">Catatan aktif</h2>
      {activeNotesLength() > 0 ? (
        <div className="active-notes__items">
          {
            notes.map(note => {
              if(note.archived === false) {
                return (
                  <NoteItem
                    key={note.id}
                    id={note.id}
                    archived={note.archived}
                    onDelete={onDelete}
                    onArchive={onArchive}
                    {...note}
                  />
                );
              }
            })
          }
        </div>
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </div>
  );
}

export default ActiveNotes;
