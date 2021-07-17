import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import {IconButton, Typography} from '@material-ui/core';
import {DeleteOutlined} from '@material-ui/icons';

const NoteCard = (props) => {
    return (
        <div>
           <Card elevation={1}>
            <CardHeader 
                action={
                    <IconButton onClick={()=>props.handleDelete(props.note.id)}>
                        <DeleteOutlined/>
                    </IconButton>
                }
                title={props.note.title}
                subheader={props.note.category}
            />
            <CardContent>
                <Typography variant="body2" color="secondary">
                {props.note.details}
                </Typography>
            </CardContent>
           </Card>
        </div>
    )
}

export default NoteCard
