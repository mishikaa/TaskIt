import React from "react";
import SignIn from "./components/googleSignIn/signin";
import Home from "./components/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/auth" element={<SignIn />}/>
      <Route exact path="/" element={<Home />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
