import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/statics/footer/footer';
import Navbar from './components/statics/navbar/navbar';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Home from './pages/home/home';
import ListaTema from './components/temas/listaTema/ListaTema';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';

import './App.css';

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>

        <Route path='/' element={ <SignIn /> }></Route>

        <Route path='/login' element={ <SignIn /> }></Route>

        <Route path='/register' element={ <SignUp /> }></Route>

        <Route path='/home' element={ <Home /> }></Route>

        <Route path='/temas' element={ <ListaTema /> }></Route>

        <Route path='/postagens' element={ <ListaPostagem /> }></Route>

      </Routes>

      <Footer />

    </Router>
  );
}

export default App;
