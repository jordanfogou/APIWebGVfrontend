import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ModifierVoiturePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [voiture, setVoiture] = useState({
    marque: '',
    modele: '',
    annee: '',
    garageId: ''
  });

  useEffect(() => {
    const fetchVoiture = async () => {
      try {
        const response = await axios.get(`https://localhost:7099/api/Voitures/${id}`);
        setVoiture(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération de la voiture", error);
      }
    };

    fetchVoiture();
  }, [id]);

  const handleChange = (e) => {
    setVoiture({ ...voiture, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://localhost:7099/api/Voitures/${id}`, voiture);
      navigate('/voitures');
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la voiture", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Marque :</label>
        <input type="text" name="marque" value={voiture.marque} onChange={handleChange} required />
      </div>
      <div>
        <label>Modèle :</label>
        <input type="text" name="modele" value={voiture.modele} onChange={handleChange} required />
      </div>
      <div>
        <label>Année :</label>
        <input type="number" name="annee" value={voiture.annee} onChange={handleChange} required />
      </div>
      <div>
        <label>ID du Garage :</label>
        <input type="text" name="garageId" value={voiture.garageId} onChange={handleChange} required />
      </div>
      <button type="submit">Modifier la Voiture</button>
    </form>
  );
}

export default ModifierVoiturePage;
