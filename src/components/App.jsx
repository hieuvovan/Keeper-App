import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  function addNote(note){

  }
  return (
    <div>
      <Header />
      <CreateArea onAdd = {} />
      
          <Note
            key={1}
            title="Note tittle"
            content="Note content"
          />
      <Footer />
    </div>
  );
}

export default App;
