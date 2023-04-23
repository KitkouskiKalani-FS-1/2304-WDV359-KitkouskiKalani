import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import ChampionListPage from './pages/ChampionListPage';
import SearchItemPage from './pages/SearchItemPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/championlist" element={<ChampionListPage/>} />
        <Route path="/" element={<SearchItemPage/>} />
        </Routes>
    </Router>
  );
}

export default App;
