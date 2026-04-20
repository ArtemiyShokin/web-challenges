import { useState, useEffect } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        setPokemon(data.results);
        console.log("hi");
      } catch (error) {
        console.log(error);
      }
    }
    loadPokemon();
  }, []);

  /*Question! But the function also runs even if I dont pack it into the useEffect function
  or add a dependency array to it....*/

  return (
    <main>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
