import React, {  useState, useEffect } from "react"
import axios from 'axios';
import Layout from "../components/layout";
import { AuthContext } from "../context/SearchContext";
import './index.css';

export default function Home() {
  const { search } = React.useContext(AuthContext);
  const [narutoChar, setNarutoChar] = useState({ name: "", image: [] });
  const [mainImage, setMainImage] = useState(0);

  function handleClick (){
    if(mainImage < narutoChar.image.length-1)
      setMainImage(prevMainImage => prevMainImage + 1);
    else
      setMainImage(0);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const narutoResult = await axios.get(`https://naruto-api.herokuapp.com/api/v1/characters/${search}`);
        console.log(await narutoResult);
        setNarutoChar({
          name: await narutoResult.data.name,
          image: await narutoResult.data.images
        });
        console.log(search);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [search]);

  return (
    <Layout>
      <section>
        {search === '' ?
          <p>Hello world!</p>
          :
          <div className={'result'}>
            <p>{narutoChar.name}</p>
            {(narutoChar?.image?.length > 0) &&
            <img onClick={handleClick} alt={narutoChar.name} src={narutoChar.image[mainImage] } />}
          </div>
        }
      </section>
    </Layout>
  )
}
