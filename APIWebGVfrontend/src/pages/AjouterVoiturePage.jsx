import React from 'react';
import FormulaireAjoutVoiture from '../components/FormulaireAjoutVoiture'; // Assurez-vous d'avoir bien importé le composant

function AjouterVoiturePage() {
  return (
    <div>
      <h1>Ajouter une nouvelle Voiture</h1>
      <FormulaireAjoutVoiture /> {/* Assurez-vous que le formulaire est rendu ici */}
    </div>
  );
}

export default AjouterVoiturePage;
