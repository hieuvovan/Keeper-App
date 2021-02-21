import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { setConstantValue } from "typescript";

function App() {

  const [note,setNotes] = useState([])
  function addNote(newNote){  
    setNotes(prev => {
      return [...prev, newNote];
    })
  }

  function deleteHandle(id){
    setNotes(prev => {
      return prev.filter((noteItem,index)=>{
        return index !== id;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd = {addNote} />
      {note.map((item,index) => {
        return <Note key={index} onDelete={deleteHandle} title = {item.title} content = {item.content} id ={index} ></Note>
      })}
          
      <Footer />
    </div>
  );
}

export default App;
