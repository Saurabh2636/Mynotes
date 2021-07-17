import React,{useState} from 'react'
import {Typography,Button, Container} from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import {makeStyles,FormControlLabel} from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import { useHistory } from 'react-router'

const useStyles=makeStyles({
    btn:{
        fontSize:15,
        backgroundColor:'violet',
        '&:hover':{
            backgroundColor:'blue'
        }
    },
    title:{
        textDecoration:'underline',
        marginBottom:20
    },
    field:{
        marginTop:20,
        marginBottom:20,
        display:'block'
    }
})
const Create = () => {
    const [title, setTitle] = useState('')
    const[details,setDetails]=useState('')
    const history=useHistory()
    const[category,setCategory]= useState('todos')
    const handleSubmit=(e)=>{
        e.preventDefault()
        if (title && details){
            fetch('http://localhost:8000/notes',{
                method:'POST',
                headers:{'Content-type':'application/json'},
                body:JSON.stringify({title,details,category})
            }).then(()=>history.push('/'))
        }
    }
    const classes = useStyles()
    return (
        <>
        <Container>    
            <Typography 
            className={classes.title}
            variant='h6'
            component='h2'
            gutterBottom
            color ='textSecondary'
            >
             Create a New Note
            </Typography>

            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
               <TextField 
                onChange={(e)=>setTitle(e.target.value)}
                className={classes.field}
                label="Note Title"
                id="outlined-basic"
                variant='outlined'
                color='secondary'  
                fullWidth
                required
                error={true}
               />
                  <TextField 
               className={classes.field}
               onChange={(e)=>setDetails(e.target.value)}
                label="Details"
                id="outlined-basic"
                variant='outlined'
                color='secondary'  
                fullWidth
                required
                multiline
                rows={5}
                
               />
               <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)}>
                 <FormControlLabel value='money' control={<Radio/>}label='Money'/>
                 <FormControlLabel value='todos' control={<Radio/>}label='Todos'/>
                 <FormControlLabel value='reminders' control={<Radio/>}label='Reminders'/>
                 <FormControlLabel value='work' control={<Radio/>}label='Work'/>
               </RadioGroup>    
            <Button
                    className={classes.btn}
                    type='submit'
                    variant='contained'
                    color='secondary'
                    endIcon={<KeyboardArrowRightIcon/>}
                    >
                    Submit
            </Button>
            </form>
           
        </Container>
    </>
    )
}

export default Create
