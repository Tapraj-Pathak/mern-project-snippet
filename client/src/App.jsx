import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

function App() {

  const [users, setUsers] = useState([]);
  // Fetch data when component mounts
  //Example to get api from own code
  useEffect(async () =>{
    const response = await axios.get("/api/users");
    setUsers(response.data);
    console.log(users);
  },[]);

  return (
    <div className='bg-slate-500'>App</div>
  )
}

export default App