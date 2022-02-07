import react from "react";
import Header from "./Components/Header";
import { Button } from "./Components/Button";
import { BasicTable } from './Components/BasicTable';
import "./styles.css";
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom';
import NavBar from "./Components/NavBar";
import { Classrooms } from "./Components/Classrooms";

function App() {
  
  return (
    <div className="App">
      
      {/* <NavBar />
      <h1>Test Header</h1>
      <Button>Previous Page</Button>
      <Button>Next Page</Button>
      <Routes>
        <Route path="/" element={<Page1/>}/>
        <Route exact path="/Page2" element={<Page2/>} />
        <Route exact path="/Page3" element={<Page3/>} />
        <Route exact path="/Page4" element={<Page4/>} />
      </Routes> */}
      <h1>Task Practice</h1>
  
      <Classrooms />
    </div>
  );
}

export default App;
