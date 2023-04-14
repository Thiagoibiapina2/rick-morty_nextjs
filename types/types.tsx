// Card
export type CardProps = {
    results: {
       id: string
      name: string
      image: string
    }[]
  }

  // Pagination
  export type PaginationProps = {
    page: number
    info: {
      pages: number 
    }
    setPage: (value: number) => void
  }

  // Search
  export type SearchProps = {
    setSearch: (value: string) => void
    setPage: (value: number) => void
  }

  // Id
  export type CharacterProps = {
    data: {
      id: string
      name: string
      status: string
      species: string
      gender: string
      origin: {
        name: string
      }
      location: {
        name: string
      }
      image: string
    }
  }
  