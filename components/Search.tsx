import styles from '../src/styles/Search.module.css'

import { SearchProps } from '../types/types'

import { AiOutlineSearch } from "react-icons/ai"


export default function Search({setSearch, setPage}: SearchProps) {
    
const searchBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <div className={styles.search_container}>
        <input
          onChange={e => {
            setPage(1)
            setSearch(e.target.value)
          }}
          placeholder="Pesquisar personagem..."
          type="text"
          name="search"
          autoComplete="off"
        />
        <button
          onClick={searchBtn}
        >
          {' '}
          <AiOutlineSearch />
        </button>
      </div>
    </>
  )
}