import React, { useState } from "react";
import "./styles.css";
import Header from "./Header/Header";
import InputCard from "./InputCard/InputCard";
import NoteCards from "./NoteCards/NoteCards";
import Footer from "./Footer/Footer";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [inputText, setText] = useState("");

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <Header />
      <InputCard
        text={inputText}
        setText={setText}
        notes={notes}
        setNotes={setNotes}
      />
      <NoteCards notes={notes} deleteNote={deleteNote} />
      <Footer />
    </div>
  );
};

export default App;
