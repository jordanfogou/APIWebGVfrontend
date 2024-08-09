import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ModifierGaragePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [garage, setGarage] = useState({ nom: '', emplacement: '' });

  useEffect(() => {
    const fetchGarage = async () => {
      try {
        const response = await axios.get(`https://localhost:7099/api/Garages/${id}`);
        setGarage(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération du garage :", error);
      }
    };

    fetchGarage();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGarage((prevGarage) => ({
      ...prevGarage,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://localhost:7099/api/Garages/${id}`, garage);
      navigate('/garages');
    } catch (error) {
      console.error("Erreur lors de la modification du garage :", error);
    }
  };

  return (
    <div>
      <h1>Modifier le Garage</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom :</label>
          <input type="text" name="nom" value={garage.nom} onChange={handleChange} required />
        </div>
        <div>
          <label>Emplacement :</label>
          <input type="text" name="emplacement" value={garage.emplacement} onChange={handleChange} required />
        </div>
        <button type="submit">Modifier</button>
      </form>
    </div>
  );
};

export default ModifierGaragePage;
