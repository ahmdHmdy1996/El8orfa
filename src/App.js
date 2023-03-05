import { useEffect, useState } from 'react';
import './App.css';
import { db } from './config/firrbase';
import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore'
import { Auth } from './components/auth';
import Footer from './components/footer';
import Home from './components/home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProtectedWrapper } from './ProtectedWrapper';





function App() {

  return (
    <Routes>
      <Route path="/" element={<Home /> } />
      {/* <Route path="/auth" element={<Auth />} /> */}

    </Routes>
  );
}

export default App;
