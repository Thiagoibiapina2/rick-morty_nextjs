import Image from 'next/image'

import styles from '../styles/About.module.css'


export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>
                Este projeto foi feito para testar conhecimentos em NextJs
                e typeScript, Foram utilizados nesse projeto conhecimento em API Rest,
                react-paginate, hooks, criação de rotas dinamicas, layout padrão para varias
                páginas e etc. O projeto apresenta os personagens de Rick and Morty, e traz detalhes
                de cada personagem.
            </p>
            <Image 
            src="/images/image.jpg"
            width="300"
            height="400"
            alt="rick_and_morty"
            />
        </div>
    )
}