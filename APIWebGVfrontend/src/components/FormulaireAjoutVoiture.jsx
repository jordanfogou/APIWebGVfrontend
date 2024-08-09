import { useState } from 'react';
import axios from 'axios';

function FormulaireAjoutVoiture({ onAjout }) {
  const [marque, setMarque] = useState('');
  const [modele, setModele] = useState('');
  const [annee, setAnnee] = useState('');
  const [garageId, setGarageId] = useState('');
  const [afficher , setAfficher ] = useState ( false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nouvelleVoiture = { marque, modele, annee, garageId };
    try {
      const response = await axios.post('https://localhost:7099/api/Voitures', nouvelleVoiture);
      onAjout(response.data);
      setMarque("");
      setAnnee("")
      setGarageId("")
      setModele("")
      setAfficher(true)

      
    } catch (error) {
      console.error("Erreur lors de l'ajout de la voiture", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Marque :</label>
        <input type="text" value={marque} onChange={(e) => setMarque(e.target.value)} required />
      </div>
      <div>
        <label>Modèle :</label>
        <input type="text" value={modele} onChange={(e) => setModele(e.target.value)} required />
      </div>
      <div>
        <label>Année :</label>
        <input type="number" value={annee} onChange={(e) => setAnnee(e.target.value)} required />
      </div>
      <div>
        <label>ID du Garage :</label>
        <input type="text" value={garageId} onChange={(e) => setGarageId(e.target.value)} required />
      </div>
      {afficher ? <div> Voiture ajouté avec succès </div> : " "}
      
      <button type="submit">Ajouter la Voiture</button>
    </form>
  );
}

export default FormulaireAjoutVoiture;
