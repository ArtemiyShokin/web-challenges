import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0",
  );
  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(page);

        const data = await response.json();
        setPokemon(data.results);
        setPage(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadPokemon();
  }, [page]);

  return (
    <main>
      {page.previous === null ? (
        <button disabled> Previous Page </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            setPage(page.previous);
          }}
        >
          Previous Page
        </button>
      )}
      <button
        type="button"
        onClick={() => {
          setPage(page.next);
        }}
      >
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
