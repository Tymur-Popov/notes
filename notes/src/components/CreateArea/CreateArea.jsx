import React, { useState } from "react";
import css from "../CreateArea/CreateArea.module.css";
import { IoIosAdd } from "react-icons/io";

function CreateArea({ submitButton, onAdd }) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    tittle: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function handleExpanded() {
    setExpanded(true);
  }

  function submitButton(event) {
    onAdd(note);
    setNote({
      tittle: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div className={css.section}>
      <form>
        {isExpanded && (
          <input
            value={note.tittle}
            type="text"
            placeholder="Tittle"
            name="tittle"
            onChange={handleChange}
            rows={isExpanded ? 3: 1}
          />
        )}
        <p>
          <textarea
            value={note.content}
            onClick={handleExpanded}
            name="content"
            placeholder="Take a note..."
            onChange={handleChange}
          ></textarea>
        </p>
        <button onClick={submitButton}>
          <IoIosAdd size={35} />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
