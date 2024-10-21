import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
import WeatherApp from './WeatherApp';

function App() {
  let handleClick = () => {
    console.log("Button was Clicked");
  }
 
  return (
    <>
    {/* <h1>Material UI demo</h1>
    <Button variant="text" color='success'>Text</Button>
    <br /><br /><br /> */}

    {/* Contained  
    Delete icon can also be imported */}
    {/* <Button variant="contained" color='error' startIcon = { <DeleteIcon />}>Delete</Button>
    <br /><br />
    <Alert severity = "error">Delete option is given!!</Alert>
      <br /><br /><br />
      <Button variant="outlined" onClick={handleClick}>Outlined</Button> */}


      <WeatherApp/>
      
     
    </>
    
  );
}

export default App
