
import { useEffect } from 'react';
import './App.css';
import { Button } from './components/button/button';
import {Header} from "./components/header/header"
import { telegram } from './components/hooks/usetelegramApp';




function App() {
  
const {tg,ontogglebutton} = telegram();

  useEffect( () => {
    tg.ready();
  },[])



  return (
    <div className="App">
     <Header/>
     <button onClick={ontogglebutton}>toogle2</button>
    </div>
  );
}
export default App;