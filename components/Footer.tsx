import Image from "next/image"
import Link from "next/link"

import styles from '../src/styles/Footer.module.css'


export default function Navbar () {
    return (
        <footer className={styles.footer}>
           <p><span>Rick&Morty</span> &copy; 2023</p>
        </footer>
    )
}