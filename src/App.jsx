
import React, { useEffect, createContext, useState } from 'react'
import Navigation from './Components/Navigation';
import { Outlet, useNavigate } from "react-router-dom";
import { Mask } from './Components/jsx';
const MaskContext = createContext()
function App() {
  const [maskclick, setMaskclick] = useState(false)
  const [url, setUrl] = useState("")
  // const navigate = useNavigate();

  // navigate("/home");



  return (
    <MaskContext.Provider value={{ maskclick, setMaskclick, url, setUrl }} className="App">
      <Mask />
      <Navigation />
      <Outlet />

    </MaskContext.Provider>
  );
}

export { App, MaskContext };
