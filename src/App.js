
import { useEffect } from 'react';
import './App.css';
import {Header} from "./components/header/header"
import { telegram } from './components/hooks/usetelegramApp';
import { Route ,Routes } from "react-router-dom"
import { Form } from './components/form/form';
import {Product} from "./components/productlist/product"

const {tg} = telegram();

function App() {
  


  useEffect(() => {
    tg.ready();
  },[])



  return (
    <div className="App">
     <Header />
     <Routes>
        <Route index element = {<Product/>} />
        <Route path ={"form"} element = {<Form/>}/>
        
     </Routes>
      
    </div>
  );
}
export default App;