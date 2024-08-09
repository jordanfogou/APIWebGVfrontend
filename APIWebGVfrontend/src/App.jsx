import { useEffect, useState } from 'react';
import './App.css'
import axios from "axios"
import GarageComponent from './components/garageComponent'

function App() {

  const [garages, setGarages] = useState([])


  const fetchgarage = async () => {
    try {
      const response = await axios.get(`https://localhost:7099/api/Garages`);
      setGarages(response.data);
      console.log("la réponse de notre API est : ",response.data);
      
      //setLoading(false);

      // console.log(`id ici est :${id}`);
    } catch (error) {
      console.log(error);
    }
  };
 // fetchgarage();
     useEffect(()=>{
      fetchgarage();
     },[])
  return (
    <div>
      <h1> nouveau depart</h1>
      <div className='garagebox'>
      {
        garages.map((g)=><GarageComponent key={g.id} garage={g}/>)
      }</div>
      
    </div>
 
  )
} 

export default App
