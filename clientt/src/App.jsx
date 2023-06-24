import React from "react";
import SignIn from "./components/googleSignIn/signin";
import Home from "./components/Home";

import { useDispatch, useSelector } from "react-redux";
import { increment } from "firebase/firestore";
import { BrowserRouter, Route, Routes } from "react-router-dom";



const App = () => {
  const counter = useSelector((state)=>state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({type: 'INC'})
  }
  const decrement = () => {
    dispatch({type: 'DEC'})
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<SignIn />}/>
      <Route exact path="/home" element={<Home />}/>
    </Routes>
      {/* <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button> */}
    </BrowserRouter>
  );
}

export default App;
