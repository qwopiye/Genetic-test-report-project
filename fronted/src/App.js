
import { useEffect } from 'react';
import './App.css';
import users from '../../Backed/user';

function App() {
  useEffect(()=>{
    fetch("/api/user")
    .then(res =>res.json())
    .then(json => console.log(json));
  },[]);
  return (
    <div className="App">
      <h1>Genetic</h1>
     {users.map((data)=>{
      return <>
      <h1>Name: {data.name}</h1>
      <h1>UserName: {data.username}</h1>
      <h1>Email: {data.email}</h1>
      </>
     })}
    </div>
  );
}

export default App;
