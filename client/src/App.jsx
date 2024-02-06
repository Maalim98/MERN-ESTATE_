import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';

export default function App() {
  return  <BrowserRouter>
  <Header></Header>
  <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/SignUp' element={<SignUp />} />
  <Route path='/SignIn' element={<SignIn />} />
  <Route path='/Profile' element={<Profile/>} />
  <Route path='/About' element={<About />} />

  </Routes>
  
  
  
  </BrowserRouter>

}
