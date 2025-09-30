import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState([]); 

  useEffect(() => {
    fetch("/api/user")
      .then(res => res.json())
      .then(json => setUser(json))
      .then(json => console.log(json))
      .catch(err => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="App">
      <h1>Genetic</h1>
      {user.length > 0 ? (
        user.map((data) => (
          <div key={data.id}>
            <h1>Name: {data.name}</h1>
            <p >Username: {data.username}</p>
            <p>Email: {data.email}</p>
          </div>
        ))
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
}

export default App;

