import { getPokemon } from "../../graphql/getPokemon";
import { getPokemons } from "../../graphql/getPokemons";
import Image from "next/image";

export default function Pokemon({ pokemon }: any) {
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <Image src={pokemon.image} alt={pokemon.name} width={100} height={100} />
    </div>
  );
}

export const getStaticPaths = async () => {
  const pokemons = await getPokemons();

  return {
    paths: pokemons.map(({ name }: { name: string }) => ({
      params: { name },
    })),
    fallback: true,
  };
};

export const getStaticProps = async (context: any) => {
  const { name } = context.params;
  const pokemon = await getPokemon(name);

  return {
    props: {
      pokemon,
    },
  };
};
