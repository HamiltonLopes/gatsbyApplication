import React, {useRef, useState} from "react"
import axios from 'axios';
import Layout from "../components/layout"

export default function Home() {
  const inputValue = useRef();
  const [digimons, setDigimons] = useState(null);
  const handleSubmite = async (e) => {
    e.preventDefault();
    try{
      const digimon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${inputValue.current.value}`);
      setDigimons(digimon.data.sprites.front_default);
      console.log(digimon);
    }catch(e){
      console.error(e);
    }
  }
  return <Layout>
      Hello world!
      <form onSubmit={handleSubmite}>
          <input ref = {inputValue} type="text" defaultValue={"teste"} />
          <button>vai</button>
      </form>
      {digimons && <img src={digimons}/>}
  </Layout>
}
