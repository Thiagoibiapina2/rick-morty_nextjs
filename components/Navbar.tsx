import Image from "next/image"
import Link from "next/link"

import styles from '../src/styles/Navbar.module.css'


export default function Navbar () {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
            <Image 
                src="/images/Rick-And-Morty-Logo.png"
                width="150" 
                height="70" 
                alt="PokeNext"
                />
            </div>
            <ul className={styles.link_items}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}