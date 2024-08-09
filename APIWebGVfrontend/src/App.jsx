import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import GarageComponent from './components/garageComponent';
import Voitures from './pages/voitures';
import AjouterVoiturePage from './pages/AjouterVoiturePage';
import AjouterGaragePage from './pages/AjouterGaragePage';
import ModifierGaragePage from './pages/ModifierGaragePage'; // Page de modification des garages
import ModifierVoiturePage from './pages/ModifierVoiturePage'; // Page de modification des voitures
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  const [garages, setGarages] = useState([])

  // Fonction pour récupérer la liste des garages depuis l'API
  const fetchgarage = async () => {
    try {
      const response = await axios.get(`https://localhost:7099/api/Garages`);
      setGarages(response.data);
      console.log("La réponse de notre API est : ", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchgarage();
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/garages">Garages</Link></li>
            <li><Link to="/voitures">Voitures</Link></li>
            <li><Link to="/ajouter-garage">Ajouter Garage</Link></li>
            <li><Link to="/ajouter-voiture">Ajouter Voiture</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/garages" element={
            <div>
              <h1>Liste des Garages</h1>
              <div className='garagebox'>
                {garages.map((g) => <GarageComponent key={g.id} garage={g} />)}
              </div>
            </div>
          } />
          <Route path="/voitures" element={<Voitures />} />
          <Route path="/ajouter-garage" element={<AjouterGaragePage />} />
          <Route path="/ajouter-voiture" element={<AjouterVoiturePage />} />
          <Route path="/modifier-garage/:id" element={<ModifierGaragePage />} /> {/* Route pour modifier un garage */}
          <Route path="/modifier-voiture/:id" element={<ModifierVoiturePage />} /> {/* Route pour modifier une voiture */}
        </Routes>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="homepage">
      <h1>Bienvenue sur la page d'accueil</h1>
      <p>Ceci est la page d'accueil de votre application.</p>
    </div>
  );
}


export default App;
