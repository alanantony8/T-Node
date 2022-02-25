
import axios from "axios";
import React, { useState ,useEffect} from "react";
import Output from "./output";
import Book from "./book";
import Verses from "./verses";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";



const App = () =>{
  
  return (
    <>
    
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Book />} />
      <Route path="/chapters/:chapter" element={<Output />} />
      <Route path="/verses/:lines" element={<Verses />} />


      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
    
  </BrowserRouter>,
    </>
    
  )
}
export default App;

