import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);

  useEffect(() => {
    if (!first || !second) return;

    const send = async () => {
      const formData = new FormData();
      formData.append('audio', first);
      formData.append('audio', second);
      await fetch('http://localhost:3001/', {
        method: 'POST',
        body: formData
      })
    }
    send()
  }, [first, second])
  return (
    <form>
      <input type="file" name="first" onChange={(event) => {
        const file = event.target.files[0]; // Get the first selected file
        setFirst(file)
      }}/>
      <input type="file" name="second" onChange={(event) => {
        const file = event.target.files[0]; // Get the first selected file
        setSecond(file)
      }}/>
    </form>
  );
}

export default App;
