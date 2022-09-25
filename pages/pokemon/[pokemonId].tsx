import Image from "next/image";
import styles from '../../styles/pokemon.module.css'

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
        <div className={styles.pokemon_container}>
            <h1>{pokemon.name}</h1>
            <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} 
                width="200" 
                height="200" 
                alt="pokemon"/>
            <div className={styles.types_container}>
                {
                    pokemon.types.map((pokeType:string | any) => {
                        return <span key={pokemon.id}
                            className={`${styles.type} ${styles['type_' + pokeType.type.name]}`}>{pokeType.type.name}</span>
                    })
                }
            </div>
            <div className={styles.abilities_container}>
                {
                    pokemon.abilities.map((pokeAbility:string | any) => {
                        return <span key={pokemon.id} className={styles.type} >{pokeAbility.ability.name}</span>
                    })
                }
            </div>
            <div className={styles.data_container}>
                <div className={styles.data_height}>
                    <h4>Altura</h4>
                    <p>{pokemon.height * 10} /cm</p>
                </div>
                <div className={styles.data_weight}>
                    <h4>Peso</h4>
                    <p>{pokemon.weight / 10} /kg</p>
                </div>
            </div>
            
        </div>
    )
}