import styles from '../styles/about.module.css'
import Image from 'next/image'

export default function About(){
    return(
        <main className={styles.main}>
            <h1>sobre o projeto</h1>
            <div className={styles.container}>
                <div className={styles.text} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit alias eum dolorum, fugiat 
                    iusto maxime soluta excepturi recusandae ad vitae necessitatibus? Totam inventore, asperiores
                    omnis quis quod cumque harum. Minima?
                </div>
                <div className={styles.charizard}>
                    <Image src={'/images/charizard.png'} 
                    width="200" 
                    height="200" 
                    alt="charizard" />
                </div>
            </div>
        </main>
    )
}