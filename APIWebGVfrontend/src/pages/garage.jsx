import { Link } from 'react-router-dom';
import GarageComponent from '../components/garageComponent'; // Assurez-vous que ce composant affiche un garage
import axios from "axios";
import { useEffect, useState } from 'react';

function Garages() {
  const [garages, setGarages] = useState([]);

  const fetchGarages = async () => {
    try {
      const response = await axios.get('https://localhost:7099/api/Garages');
      setGarages(response.data);
      console.log("Réponse API: ", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGarages();
  }, []);

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/ajouter-garage">Ajouter Garage</Link></li>
        </ul>
      </nav>

      <h1>Liste des Garages</h1>
      <div className='garagebox'>
        {garages.map((g) => <GarageComponent key={g.id} garage={g} />)}
      </div>
    </div>
  );
}

export default Garages;
