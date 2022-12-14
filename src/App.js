
import { useEffect } from 'react';
import './App.css';
import {Header} from "./components/header/header"
import { telegram } from './components/hooks/usetelegramApp';
import { Route ,Routes } from "react-router-dom"
import { Form } from './components/form/form';
import {Product} from "./components/productlist/product";
import { Vine } from './components/productlist/vine';
import {Admin} from "../src/components/productlist/admin"

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
        <Route path ={"admin"} element = {<Admin/>}/>
        <Route path ={"vine"} element = {<Vine/>}/>
        
     </Routes>

     
      
    </div>
  );
}
export default App;