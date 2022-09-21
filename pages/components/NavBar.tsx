import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/navbar.module.css'

  export default function NavBar(){
    return(
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/images/pokeball.png" width="50" height="50" alt="pokeball" />
                <h1>PokeNext</h1>
            </div>
            <ul className={styles.link_list}>
                <li className={styles.link_item}>
                    <Link href={"/"}><a >Home</a></Link>
                </li>
                <li className={styles.link_item}>
                    <Link href={"/about"}><a  >About</a></Link>
                </li>
            </ul>
        </nav>
    )
  }