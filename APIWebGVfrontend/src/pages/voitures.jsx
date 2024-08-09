import { useEffect, useState } from 'react';
import "../styles/voituresPagesStyle.css";
import axios from "axios";
import VoitureComponent from '../components/voiturecomponent';

function Voitures() {

  const [voitures, setVoitures] = useState([]);

  const fetchVoitures = async () => {
    try {
      const response = await axios.get(`https://localhost:7099/api/Voitures`);
      setVoitures(response.data);
      console.log("la réponse de notre API est : ", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVoitures();
  }, [])

  return (
    <div>
      <h1>Liste des Voitures</h1>
      <div className='voiturebox'>
        {voitures.map((v) => <VoitureComponent key={v.id} voiture={v} />)}
      </div>
    </div>
  )
}

export default Voitures;
