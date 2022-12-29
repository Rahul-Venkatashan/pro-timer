import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPageContainer from './LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageContainer></LandingPageContainer>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App