import React from 'react';
import "../styles/garageComponentStyle.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const GarageComponent = ({ garage, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`https://localhost:7099/api/Garages/${garage.id}`);
      onDelete(garage.id); // Appelle la fonction onDelete pour mettre à jour l'état parent
    } catch (error) {
      console.error("Erreur lors de la suppression du garage :", error);
    }
  };

  const handleModify = () => {
    navigate(`/modifier-garage/${garage.id}`);
  };

  return (
    <div className='garageContainer'>
      <div>Nom : {garage.nom}</div>
      <div>Emplacement : {garage.emplacement}</div>
      <button onClick={handleModify} style={{ backgroundColor: 'darkgreen', color: 'white' }}>Modifier</button>
      <button onClick={handleDelete} style={{ backgroundColor: 'darkred', color: 'white' }}>Supprimer</button>
    </div>
  );
};

export default GarageComponent;
