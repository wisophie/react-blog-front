
import React, { createContext, useState } from 'react'
import Navigation from './Components/Navigation';
import { Outlet } from "react-router-dom";
import { Mask, Mask2 } from './Components/jsx';
const MaskContext = createContext()
function App() {
  const [maskclick, setMaskclick] = useState(false)
  const [maskclick2, setMaskclick2] = useState(false)
  const [url, setUrl] = useState("")
  // const navigate = useNavigate();

  // navigate("/home");



  return (
    <MaskContext.Provider value={{ maskclick, setMaskclick, maskclick2, setMaskclick2, url, setUrl }} className="App">
      <Mask />
      <Mask2 />
      <Navigation />
      <Outlet />

    </MaskContext.Provider>
  );
}

export { App, MaskContext };
