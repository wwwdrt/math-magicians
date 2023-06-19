import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Calculator from './Components/Calculator';
import Quotes from './Components/Quotes';
import Login from './Components/Login';

const App = () => (
  <Provider store={store}>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
