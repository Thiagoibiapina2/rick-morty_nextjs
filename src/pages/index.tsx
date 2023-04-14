import styles from '../styles/Home.module.css'

import Image from 'next/image'


//Componets
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'
import Pagination from '../../components/Pagination'
import Loading from '../../components/Loading'
import Search from '../../components/Search'

import { useState, useEffect } from 'react'
 
  
  export default function Home() {

    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')
    
    const [fetchedData, setFetchedData] = useState({
      info: { pages: 0, count: '' },
      results: []
    })
  
    const { info, results } = fetchedData
    
  
    const api = `https://rickandmortyapi.com/api/character?page=${page}&name=${search}`
  
    useEffect(() => {
      setLoading(true)
      fetch(api)
        .then(res => res.json())
        .then(data => {
         setFetchedData(data)
         setLoading(false)
        })
    }, [api])
      
    return (
      <>
         <Search setSearch={setSearch} setPage={setPage} />
        <div className={styles.title_container}>
        </div>
        
        <div>
        {loading ? (
          <div className="styles.load">
        <Loading />
        </div>
         ) : (
       <div className={styles.personagem_container}>
         <Card results={results} />
       </div>
        )}
        </div>
    <Pagination
        info={info}
        page={page}
        setPage={setPage}
      />
      </>
    )
  }
  



