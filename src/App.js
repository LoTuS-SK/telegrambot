
import { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp;



const onclose = ()=>{
  tg.close()
}


function App() {

  useEffect(()=>{
    tg.ready();
  },[])


  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello LoTuS</h1>
        <button onClick={onclose}>close</button>
      </header>
    </div>
  );
}

export default App;