
import { useEffect } from 'react';
import './App.css';
import {Header} from "./components/header/header"
import { telegram } from './components/hooks/usetelegramApp';


const {tg,ontogglebutton} = telegram();

function App() {
  


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