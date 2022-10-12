import { React, useState } from "react";

//components
import Header from "./components/Header/Header";
import CreateArea from "./components/CreateArea/CreateArea";
import Note from "./components/Note/Note";
import Count from "./components/Count/Count";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  function deleteNotes (id) {
    setNotes(prevValue => {
      return [...prevValue.filter((note, index) => 
        index !== id )]
    })
  }

  return (
    <div>
      <Header />
      <Count count={notes.length === 0? "Empty" : ` ${notes.length} Notes in Database`}/>
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          tittle={note.tittle}
          content={note.content}
          onDelete={deleteNotes}
        />
      ))}
    </div>
  );
}

export default App;
