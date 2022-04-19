
import React, { useEffect } from 'react'
import Navigation from './Components/Navigation';
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  // const navigate = useNavigate();

  // navigate("/home");



  return (
    <div className="App">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
