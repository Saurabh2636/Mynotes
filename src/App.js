import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Notes from './component/Notes'
import Create from './component/Create'
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import {purple} from '@material-ui/core/colors'
import './index.css'
import Layout from './Note/Layout'
const theme = createTheme({
  palette:{
    primary:{
      main:'#fefefe'
    },
    secondary:purple
  },
  typography:{
    fontFamily:'Quicksand',
    fontWeightLight:400,
    fontWeightRegular:500,
    fontWeightMedium:600,
    fontWeightBold:700
  }
})
const App = () => {
  return (
  <ThemeProvider theme={theme}> 
  <Router>
    <Layout>
    <Switch>
      <Route exact path='/'><Notes/></Route>
      <Route exact path='/create'><Create/></Route>
    </Switch>
    </Layout>
  </Router>
  </ThemeProvider>
  )
}

export default App
