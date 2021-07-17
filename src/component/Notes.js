import React, { useEffect,useState } from 'react'
import NoteCard from  '../Note/NoteCard'
import Masonary from 'react-masonry-css'
import Container from '@material-ui/core/Container'
const Notes = () => {
    const [notes, setNotes] = useState([])
    useEffect(()=>{
    fetch('http://localhost:8000/notes')
        .then((res)=>res.json())
        .then(data=>setNotes(data))
    },[])
    const handleDelete= async (id)=>{
        await fetch('http://localhost:8000/notes/'+id,{
            method:'DELETE'
        })
        const newNotes=notes.filter(node=>node.id!=id)
        setNotes(newNotes)
    }
    const breakpoints={
        default:3,
        1100:2,
        700:1
    }
    return (    
        <Container>    
           <Masonary 
           breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
              {
                notes.map((note)=>(
                 <div item key ={note.id} >
                  <NoteCard note={note} handleDelete={handleDelete}/>
                 </div>
              ))}
            </Masonary>  
        </Container>
    )
}

export default Notes
