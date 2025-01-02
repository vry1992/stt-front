import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);

  const send = async () => {
    const formData = new FormData();
    formData.append('audio', first);
    formData.append('audio', second);
    await fetch('http://localhost:3001/transcribe', {
      method: 'POST',
      body: formData
    })
  }


  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="file" name="first" onChange={(event) => {
        const file = event.target.files[0]; // Get the first selected file
        setFirst(file)
      }}/>
      <input type="file" name="second" onChange={(event) => {
        const file = event.target.files[0]; // Get the first selected file
        setSecond(file)
      }}/>
      <button onClick={send}>Go</button>
    </form>
  );
}

export default App;
