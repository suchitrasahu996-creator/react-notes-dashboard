import { useState,useContext,useRef,useEffect } from "react";

import { NotesContext } from "../context/NotesContext";
  const NoteInput =()=>{
    const [note,setNote] = useState("");
    const {addNote}= useContext(NotesContext);

    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus()
    },[]);

    const handledAdd =()=>{
        if(note.trim()==="") return;

        addNote(note);
        setNote("");
    };

    return(
        <div>
            <input ref={inputRef} type="text" value={note} onChange={(e)=>setNote(e.target.value)} placeholder="Please write the notes here..."/>
            <button onClick={handledAdd}>AddNote</button>
        </div>
    )

  };

  export default NoteInput;