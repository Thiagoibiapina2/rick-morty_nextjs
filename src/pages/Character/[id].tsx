 import Image from "next/image";

 import { CharacterProps } from "../../../types/types";

import styles from '../../styles/character.module.css'
import { TypeQueryNode } from "typescript";
import { GetServerSideProps } from "next";
 
 export async function getServerSideProps ({ query }: any ) {
      
      const  { id } = query;     
  
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)  
  
      const data = await res.json()
  
      return {
          props : {data}
      }
  
  }

  export default function CharacterId( { data } : CharacterProps ) {

    const {  id,name, status, species, gender, origin, location, image } = data

    return(
      <div className={styles.character_container}>
        <h1 className={styles.title}>{name}</h1>
        <div className={styles.img}>
        <Image
         src={image}
         width="300"
         height="300"
         alt={name}
         />
         </div>
        <div className={styles.info}>
            <h2>Detalhes do personagem</h2>
            <ul>
              <li>
                <strong>Name:</strong> { name }
              </li>
              <li>
                <strong>Status:</strong> { status }
              </li>
              <li>
                <strong>Gender:</strong> { gender }
              </li>
              <li>
                <strong>Species:</strong> { species }
              </li>
              <li>
                <strong>Location:</strong> { location.name }
              </li>
              <li>
                <strong>Originally From:</strong> { origin.name }
              </li>
            </ul>
          </div>
      </div>
    )
  }
  