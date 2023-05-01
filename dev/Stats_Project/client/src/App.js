import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import ChampionListPage from './pages/ChampionListPage';
import SearchItemPage from './pages/SearchItemPage';
import LeaderboardPage from './pages/LeaderboardPage';
import SpecificItemPage from './pages/SpecificItemPage';
import SpecificChampionPage from './pages/SpecificChampionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/champion/:championName" element={<SpecificChampionPage/>} />
        <Route path="/item/:itemName" element={<SpecificItemPage/>} />
        <Route path="/leaderboard" element={<LeaderboardPage/>} />
        <Route path="/championlist" element={<ChampionListPage/>} />
        <Route path="/" element={<SearchItemPage/>} />
        </Routes>
    </Router>
  );
}

export default App;
