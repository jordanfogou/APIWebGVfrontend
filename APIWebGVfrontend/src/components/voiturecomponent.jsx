import React from 'react';
import './voitureComponentStyle.css';

function VoitureComponent({ voiture }) {
    return (
        <div className="voitureContainer">
            <div>Marque : {voiture.marque}</div>
            <div>Modèle : {voiture.modele}</div>
            <div>Année : {voiture.annee}</div>
            <div>Garage ID : {voiture.garageId}</div>
        </div>
    );
}

export default VoitureComponent;
