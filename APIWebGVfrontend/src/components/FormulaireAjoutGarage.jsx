import { useState } from 'react';
import axios from 'axios';

function FormulaireAjoutGarage({ onAjout }) {
  const [nom, setNom] = useState('');
  const [emplacement, setEmplacement] = useState('');
  const [afficher , setAfficher ] = useState ( false)

  const handleSubmit = async (e) => {
    //e.preventDefault();
    const nouveauGarage = { nom, emplacement };
    try {
      const response = await axios.post('https://localhost:7099/api/Garages', nouveauGarage);
      onAjout(response.data);
      setNom ("")
      setEmplacement("")
      setAfficher(true)

    } catch (error) {
      console.error("Erreur lors de l'ajout du garage", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom du Garage :</label>
        <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />
      </div>
      <div>
        <label>Emplacement :</label>
        <input type="text" value={emplacement} onChange={(e) => setEmplacement(e.target.value)} required />
      </div>
      
      {afficher ? <div> Garage ajouté avec succès </div> : " "}
      <button type="submit">Ajouter le Garage</button>
    </form>
  );
}

export default FormulaireAjoutGarage;
