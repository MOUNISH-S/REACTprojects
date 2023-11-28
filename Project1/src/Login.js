import './Asset/Css/Style.css'
import { useState } from 'react';
import ReactiveButton from 'reactive-button';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HttpsIcon from '@mui/icons-material/Https';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import axios from 'axios';
export const Login = () => {

  const func = () => { }

  const [state, setState] = useState('idle');
  const [pass, setpass] = useState(true);
  const[mail,setmail]=useState('');
  const[password,setpassword]=useState('');
  const onClickHandler = () => {
    setState('loading');
  }
  const visib = () => {
    setpass(!pass);

  }
  const handlesubmit=(e)=>{
    axios.get(`http://localhost:3002/users?mail=${mail}&password=${password}`)
    .then(res=>{
      if(res.data.length>0){
      alert('logged in successfully')
    
      }
      else{
        alert("Invalid username and password")
      }
       })
    }

  return (
    <>
      <div className='main'>
      
      <div className='snow'></div>
      <div className='div'>
        <h2 className='myclass'></h2>
        <h2 className='myclass1'>LOG IN</h2>
        <div className='acc'><AccountCircle /></div> <TextField onChange={(e)=>{setmail(e.target.value)}}id="outlined-basic" label="User name" required />

        <div className='pass'><HttpsIcon /></div><TextField type={pass ? "password" : "text"} onChange={(e)=>(setpassword(e.target.value))} variant="outlined" label="Password" required sx={{ zIndex: 0 }} /><br />
        <a href="" className='for' >Forgot Password?</a>
        <div style={{textAlign:"center"}}> 
        <Link to="/submit"><ReactiveButton onClick={handlesubmit}
          buttonState={state}
          idleText="Submit"
          
        /></Link></div>
        <p className='pra'>Or</p>
        <Stack direction="row" spacing={2} height={1}>
          <Avatar className='sig' src="https://i.pinimg.com/736x/39/21/6d/39216d73519bca962bd4a01f3e8f4a4b.jpg" />
          <Avatar className='sig' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQpSRDiK04g36atGsUnqmz96LTztYREEHRctfK3eIAnCI618FKzmM3F6sW5KjlL4obe88&usqp=CAU" />
          <Avatar className='sig' src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png" />
        </Stack>
        <p className='accoun'>Don't have an account? </p>
      </div>
    </div>
    </>
  )
}