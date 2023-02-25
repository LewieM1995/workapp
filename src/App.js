import Main from "./pages/Main";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BatchPost from "./pages/BatchPost";
import BlendPost from './pages/BlendPost';
import SearchPage from "./pages/SearchPage";

function App() {


  return (
    <Router>
      <Main />
        <Routes>
          <Route exact path="/" element={<SearchPage/>}/>
          <Route exact path="/manualblend" element={<BlendPost/>}/>
          <Route exact path="/batchpost" element={<BatchPost/>}/>
        </Routes>
    </Router>
  );
}

export default App;
