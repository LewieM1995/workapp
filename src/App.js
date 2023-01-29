import Main from "./pages/Main";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BatchPage from "./pages/BatchPage";
import BlendPage from './pages/BlendPage';
import SearchPage from './pages/SearchPage';

function App() {



  return (
    <Router>
      <Main />
        <Routes>
          <Route exact path="/" element={<BatchPage/>}/>
          <Route exact path="/manualblend" element={<BlendPage/>}/>
          <Route exact path="/search" element={<SearchPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
