import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPageContainer from './LandingPage';
import LoginPage from './LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageContainer></LandingPageContainer>}></Route>
        <Route path='/auth' element={<LoginPage></LoginPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App