import ReactPaginate from 'react-paginate'

import { PaginationProps } from '../types/types'

import styles from '../src/styles/Pagination.module.css'


export default function Pagination  ({ page, setPage, info}: PaginationProps) {

        const pageChange = (data: {selected: number}) => {
        setPage(data.selected  + 1)
      }

    return (
        <div className={styles.pagination}>
       <ReactPaginate
          nextLabel="Next"
          //forcePage={page === 1 ? 0 : page - 0} 
          previousLabel="Prev"
          pageCount={info?.pages}
          onPageChange={pageChange}
          activeClassName='active'
          />
      </div>
    )
}