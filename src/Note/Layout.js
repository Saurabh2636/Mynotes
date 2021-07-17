import { makeStyles } from '@material-ui/core'
import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import {SubjectOutlined,AddCircleOutlineOutlined} from '@material-ui/icons'
import {useHistory,useLocation} from  'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
const drawerWidth=240
const useStyle =makeStyles((theme)=>{
   return{
    page:{
       background:'#f9f9f9',
       width:'100%'
   },
   drawer:{
        width:drawerWidth
   },
   drawerPaper:{
       width:drawerWidth
   },
   root:{
       display:'flex'
   },
   active:{
       background:'#f4f4f4'
   },
   appbar:{
     width:`calc(100% - ${drawerWidth}px)`
   },
   toolbar:theme.mixins.toolbar
   }
})
const Layout = ({children}) => {
    const menuItem=[
        {
            text:'My Notes',
            icon:<SubjectOutlined color='secondary'/>,
            path:'/'
        },
        {
            text:'Create Notes',
            icon:<AddCircleOutlineOutlined color='secondary'/>,
            path:'/create'
        }
    ]
    const classes=useStyle()
    const History =useHistory()
    const location =useLocation()
    return (
        <div className={classes.root}>
       
        <AppBar className={classes.appbar}>
            <Toolbar>
               <Typography>
                Welcome to our note store
               </Typography> 
            </Toolbar>
        </AppBar>
        <Drawer
         className={classes.drawer}
         variant='permanent'
         anchor='left'
         classes={{paper:classes.drawerPaper}}
         >
         <div> 
           <Typography variant='h5'>
             Notes store
            </Typography>
         </div>
         <List>
         {menuItem.map(item=>(
             <ListItem
              button
              key={item.text}
              onClick={()=>History.push(item.path)}
              className={(location.pathname==item.path)?classes.active:null}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text}/>
             </ListItem>
         ))}
         </List>
         </Drawer>
        <div className={classes.page}>
           <div className={classes.toolbar}></div> 
           {children} 
        </div>   
        </div>
    )
}



export default Layout
