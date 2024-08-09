import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import GarageComponent from './components/garageComponent';
import Voitures from './pages/voitures';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  const [garages, setGarages] = useState([])

  const fetchgarage = async () => {
    try {
      const response = await axios.get(`https://localhost:7099/api/Garages`);
      setGarages(response.data);
      console.log("la réponse de notre API est : ", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchgarage();
  }, [])

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/garages">Garages</Link></li>
            <li><Link to="/voitures">Voitures</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/garages" element={
            <div>
              <h1>nouveau depart</h1>
              <div className='garagebox'>
                {garages.map((g) => <GarageComponent key={g.id} garage={g} />)}
              </div>
            </div>
          } />
          <Route path="/voitures" element={<Voitures />} />
        </Routes>
      </div>
    </Router>
  )
}

function HomePage() {
  return (
    <div>
      <h1>Bienvenue sur la page d'accueil</h1>
      <p>Ceci est la page d'accueil de votre application.</p>
    </div>
  );
}

export default App;
