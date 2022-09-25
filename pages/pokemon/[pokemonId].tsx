import Image from "next/image";

export const getStaticPaths = async() => {
    let maxPokemons = 91;
    const api = 'https://pokeapi.co/api/v2/pokemon/' ;

    const respon   = await fetch(`${api}?limit=${maxPokemons}`);
    const data = await respon.json()

    //params
    const paths = data.results.map((pokemon:any, index:number) => {
        return{
            params: { pokemonId: (index + 1).toString() },
        }
    })

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context:any) => {
    const id   = context.params.pokemonId;
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await resp.json()

    return {
        props: {pokemon:data},
    }
};


export default function pokemon({pokemon}:any ){

    return( 
        <>
            <p>{pokemon.name}</p>
            <details>
                <summary>Abilidades</summary>
                <p>{pokemon.abilities[0].ability.name}</p>
                <p>{pokemon.abilities[1].ability.name}</p>
            </details>
            <details>
                <summary>Tipo</summary>
                <p>{pokemon.types[0].type.name}</p>
                <p>{pokemon.types[1].type.name}</p>
            </details>
            <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} 
                width="100" 
                height="100" 
                alt="pokemon"/>
        </>
    )
}