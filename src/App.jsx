import { useState } from 'react';
import Home from '../src/pages/Home/Home';
import Doctors from '../src/pages/Doctors/Doctors'
import About from '../src/pages/About/About'
import Contact from '../src/pages/Contact/Contact'
import Login from '../src/pages/Login/Login'
import Profile from '../src/pages/Profile/Profile'
import Appointment from '../src/pages/Appointment/Appointment'


import './App.css'
import Navbar from './component/NavBar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Header from './component/NavBar/Header';
import Footer from './component/NavBar/Footer';
import MyAppointment from './pages/MyAppointment/MyAppointment';

function App() {
  

  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/doctors/:speciality" element={<Doctors/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/appointment" element={<Appointment/>}/>
        <Route path="/appointment/:docId" element={<Appointment/>}/>
        <Route path='/myAppointment' element={<MyAppointment/>}/>
      </Routes>
      <Footer/>
    </div>
    
  )
}

export default App
