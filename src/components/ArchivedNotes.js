import React from "react";
import "./ActiveNotes.css";
import NoteItem from "./NoteItem";

function ArchivedNotes({ notes, onDelete, onArchive }) {

  function archivedNotesLength() {
    const archived = true;
    const count = notes.filter(note => note.archived === archived).length;

    return count;
  }

  return (
    <div className="active-notes">
      <h2 className="active-notes__title">Arsip</h2>
      {archivedNotesLength() > 0 ? (
        <div className="active-notes__items">
          {
            notes.map(note => {
              if(note.archived === true) {
                return (
                  <NoteItem
                    key={note.id}
                    id={note.id}
                    archive={note.archived}
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

export default ArchivedNotes;
