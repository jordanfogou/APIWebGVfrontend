import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/voitureComponentStyle.css';
import axios from 'axios';

function VoitureComponent({ voiture, onDelete }) {
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await axios.delete(`https://localhost:7099/api/Voitures/${voiture.id}`);
            onDelete(voiture.id); // Met à jour la liste des voitures après la suppression
        } catch (error) {
            console.error("Erreur lors de la suppression de la voiture :", error);
        }
    };

    const handleEdit = () => {
        navigate(`/modifier-voiture/${voiture.id}`);
    };

    return (
        <div className="voitureContainer">
            <div>Marque : {voiture.marque}</div>
            <div>Modèle : {voiture.modele}</div>
            <div>Année : {voiture.annee}</div>
            <div>Garage ID : {voiture.garageId}</div>
            <div>
                <button className="editButton" onClick={handleEdit}>Modifier</button>
                <button className="deleteButton" onClick={handleDelete}>Supprimer</button>
            </div>
        </div>
    );
}

export default VoitureComponent;
