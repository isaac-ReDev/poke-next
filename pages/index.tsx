import Image from "next/image";
import styles from '../styles/home.module.css'
import Cards from "./components/Cards";


export async function getStaticProps(){
  let maxPokemons = 91;
  const api = 'https://pokeapi.co/api/v2/pokemon/' ;

  const respon   = await fetch(`${api}?limit=${maxPokemons}`);
  const data = await respon.json()

  data.results.forEach((item:any, index:number)=> {
    item.id = index + 1;
  })

  return{
    props:{
      pokemons: data.results,
    },
  }
  
};

type Props = {
  pokemons:any;
};

const Home = ({pokemons}:Props) => {

  return (
    <> 
      <div className={styles.title_header}>
          <h1 className={styles.poke} >Poke <span>Next</span></h1>
          <Image src={"/images/pokeball.png"} width="50" height="50" alt="Pokeball" />
        </div>
      <ul className={styles.pokemons_container}>
        {
          pokemons !== undefined ? pokemons.map((pokemon:any) => {
            return <Cards pokemon={pokemon} key={pokemon.id} />
          })
          : <h1>Loading . . .</h1>
        }
      </ul>
    </>

  )
}

export default Home




//* componet antigo
{/* <li key={item.id} className={styles.pokemon}>
              <p>{item.id}</p>
              <p>{item.name}</p>
              </li> */}