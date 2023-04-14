import Image from 'next/image'
import Link from 'next/link'

import { CardProps } from '../types/types'

import styles from '../src/styles/Card.module.css'
import { isJsxElement } from 'typescript'


export default function Card ({ results }: CardProps) {

  let display: string | JSX.Element[];
  
  if (results) { display = results.map(x => {
    const { id, name, image} = x

    return(
     <div className={styles.card} key={id}>
      <Image
       src={image}
       width="200"
       height="200"
       alt={name}
       />
        <div className={styles.name}>{name}</div>
      <Link  className={styles.btn} href={`Character/${id}`}>
            Detalhes
      </Link>
     </div>
    )}
  )
    }
else {
  return <div className={styles.noSearch}>Nehum personagem encontrado :/</div>
}

return <>{display}</>
}


    

