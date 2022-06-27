import React from "react";
import './Button.css';

function Button({ id, isArchive, archived, onDelete, onArchive }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>
      <button className="note-item__archive-button" onClick={() => onArchive(id, archived)}>
        {isArchive ? <>Pindahkan</> : <>Arsipkan</>}
      </button>
    </div>
  );
}

export default Button;