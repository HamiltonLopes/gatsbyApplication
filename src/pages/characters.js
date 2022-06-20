import React from "react";
import axios from "axios";
import Layout from "../components/layout";

export default function Characters() {
    const [allCharacters, setAllCharacters] = React.useState([]);
    React.useEffect(() => {
        async function fetchData() {
            const arrayCharacters = await axios.get(`https://naruto-api.herokuapp.com/api/v1/characters?sort=true`);
            setAllCharacters(await arrayCharacters.data);
        }
        fetchData();
    },[])
    return (
        <Layout>
            <h1>
                AllCharacters:
            </h1>
            <ul>
                {(allCharacters.length > 1) &&
                    allCharacters.map((character,index) => 
                        <li key={index} >
                            <p>Nome: {character.name}</p>
                            <p>Id: {character.id}</p>
                        </li>
                    )
                }
            </ul>
        </Layout>
    )
}
