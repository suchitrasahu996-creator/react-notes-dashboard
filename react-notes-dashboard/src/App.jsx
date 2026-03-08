import NoteInput from "./components/NoteInput"
import NotesCount from "./components/NotesCount"
import NotesList from "./components/NotesList"
import { NotesProvider } from "./context/NotesContext"




function App() {
  return (
    <NotesProvider>
      <div style={{padding:"20px"}}>
        <h1>Notes Dashboard</h1>
        <NoteInput/>
        <NotesCount/>
        <NotesList/>
      </div>

    </NotesProvider>
      
   
  )
}

export default App
