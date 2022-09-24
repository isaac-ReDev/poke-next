import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/cards.module.css'

type Props = {
    pokemon:any;
}

export default function  Cards({pokemon}:Props ) {

    return(
        <li key={pokemon.id} className={styles.cards}>
            <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
            width="120" 
            height="120"
            alt={`pokemon image ${pokemon.name} `}/>
            <div className={styles.info}>
                <span>#{pokemon.id}</span>
                <h3 className={styles.title}>{pokemon.name}</h3>
                <Link href={`/pokemon/${pokemon.id}`} >
                    <a className={styles.btn} >Details</a>
                </Link>
            </div>
        </li>
    )

};