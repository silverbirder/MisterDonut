import Link from "next/link";
import Image from "next/image";
import { getPokemons } from "../../graphql/getPokemons";

export default function Home({ pokemons }: any) {
  return (
    <ul>
      {pokemons.map((pokemon: any) => (
        <li key={pokemon.name}>
          <Link as={`/pokemon/${pokemon.name}`} href="/pokemon/[name]">
            <a>
              <h2 style={{ textTransform: "capitalize" }}>{pokemon.name}</h2>
              <Image
                src={pokemon.image}
                alt={`${pokemon.name} picture`}
                width={100}
                height={100}
              />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export const getStaticProps = async () => {
  const pokemons = await getPokemons();
  return {
    props: {
      pokemons,
    },
  };
};
