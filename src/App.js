import React,{useState} from 'react';
import MenuBar from "./components/MenuBar";
import Home from "./components/Home";
import './App.css';

import {AnimatePresence} from "framer-motion";

function App() {
const [showMenu,setShowMenu] = useState(false);
  return(
    <AnimatePresence>
    <div className="App">
      <MenuBar showMenu={showMenu}/>
      <Home toggleMenu={setShowMenu}/>
    </div>
    </AnimatePresence>
  );


}

export default App;
