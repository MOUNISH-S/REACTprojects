import React from 'react'
import './Asset/Css/Sig.css'
import { useState } from 'react';
import ReactiveButton from 'reactive-button';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HttpsIcon from '@mui/icons-material/Https';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function Sign() {
  const func = () => { }

  const [state, setState] = useState('idle');
  const [pass, setpass] = useState(true);
  const onClickHandler = () => {
    setState('loading');
  }
  const visib = () => {
    setpass(!pass);

  }
  const[name,setname]=useState('');
  const[mail,setmail]=useState('');
  const[password,setpassword]=useState('');
  const handlesubmit=(e)=>{
    axios.post(' http://localhost:3002/users',{mail,password});
    alert('Logged in successfully');
  }
  return (
   
    <div className='main'>
      {/* <div className='snow'></div> */}
      <div className='div'>
        <h2 className='myclass'></h2>
        <h2 className='myclass1'>SIGN UP</h2>
        <div className='acc'></div> <TextField id="outlined-basic" label="User name"  required onchange={(e)=>{setname(e.target.value)}}/>
        <div className='acc'></div> <TextField id="outlined-basic" label="email"  required onchange={(e)=>{setmail(e.target.value)}}/>
        <div className='pass'></div><TextField type={pass ? "password" : "text"}  variant="outlined" label="Password" onchange={(e=>{setpassword(e.target.value)})}required sx={{ zIndex: 0 }} /><br />
        <div style={{textAlign:"center"}}> 
        <Link to="/submit"><ReactiveButton onClick={handlesubmit}
          buttonState={state}
          idleText="Submit"
          
        /></Link></div>
      
        <Stack style={{marginTop:'1px'}} direction="row" spacing={2} height={1}>
          <Avatar className='sig' src="https://i.pinimg.com/736x/39/21/6d/39216d73519bca962bd4a01f3e8f4a4b.jpg" />
          <Avatar className='sig' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQpSRDiK04g36atGsUnqmz96LTztYREEHRctfK3eIAnCI618FKzmM3F6sW5KjlL4obe88&usqp=CAU" />
          <Avatar className='sig' src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png" />
        </Stack>
        <p className='accoun'>Already have an account? </p>
      </div>
   
    </div>
  )
}
