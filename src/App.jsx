import { Routes , Route } from "react-router-dom";

import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./components/NavBar";
import "./App.css";




function App() {
  return (
    <div>
      
      <Navbar> </Navbar>
      <h1></h1>
      <Routes>
        <Route path="" element= {<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element = {<ItemListContainer/>} />
        <Route path= "/item/:id" element = {<ItemDetailContainer/>} />

      </Routes>
      
    </div>
  )
  
}

export default App;
