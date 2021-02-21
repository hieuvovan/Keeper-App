import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab'
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpand, setIsExpand] = useState(false);

  function handleChange(event){
    const {name,value} = event.target;
    setNote(prev => {
      return {
        ...prev,
        [name]: value
      }
    });
  }

  function submitNote(event){
    props.onAdd(note);
    event.preventDefault();
  }

  function expand(){
    setIsExpand(true)
  }

  return (
    <div>
      <form className="create-note">
        {isExpand ? ( <input
          name="title"
          onChange={handleChange}
          value = {note.title}
          placeholder="Title"
        />) : null}
        <textarea
          name="content"
          onChange={handleChange}
          value = {note.content}
          onClick = {expand}
          placeholder="Take a note..."
          rows={isExpand ? "3" : "1"}
        />
        <Zoom in = {isExpand}>
        <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
