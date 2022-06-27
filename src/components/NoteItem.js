import React from "react";
import Button from "./Button";
import "./NoteItem.css";

function NoteItem({ title, createdAt, body, id, archived, onDelete, onArchive}) {
  const formatDate = (createdAt) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(createdAt).toLocaleDateString("id", options);
  };

  const getDayName = (date) => {
    const options = { weekday: "long" };
    return new Date(date).toLocaleDateString("id", options);
  };

  return (
    <div className="note-item">
      <div className="note-item__body">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">
          {`${getDayName(createdAt)}, ${formatDate(createdAt)}`}
        </p>
        <p className="note-item__content">{body}</p>
      </div>
      <Button id={id} isArchive={archived} archived={archived} onDelete={onDelete} onArchive={onArchive}/>
    </div>
  );
}

export default NoteItem;
