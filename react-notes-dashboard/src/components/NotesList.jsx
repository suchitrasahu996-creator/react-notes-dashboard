import { useContext, useState } from "react"
import { NotesContext } from "../context/NotesContext"


const NotesList =()=>{
    const {notes} =useContext(NotesContext);
    const [selectedIndex, setSelectedIndex]= useState(null);

    return(
        <ul>
            {notes.map ((note,index)=>{
                <li key ={index} onClick={()=>setSelectedIndex(index)} style={{background:selectedIndex===index ? "#d3f3ff" : "transparent", cursor:"pointer", padding:"6px"}}>
                    {note}</li>
            })}
        </ul>
    )

};
export default NotesList;