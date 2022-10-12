import React from "react";
import css from '../Note/Note.module.css';
import { MdDelete } from 'react-icons/md';


function Note ({tittle, content, onDelete, id}) {
    return (
        <div className={css.note}>
            <h1>{tittle}</h1>
            <p>{content}</p>
            <button onClick={() => onDelete(id)}><MdDelete size={30}/></button>
        </div>
    )
}

export default Note;