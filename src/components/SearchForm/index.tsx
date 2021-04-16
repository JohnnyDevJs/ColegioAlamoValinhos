import { useRouter } from 'next/dist/client/router'
import React, { FormEvent, useState } from 'react'

import { FaSearch } from 'react-icons/fa'

import { Search } from './styles'

interface SearchFormProps {
  className?: string
}

const SearchForm: React.FC<SearchFormProps> = ({ className, ...rest }) => {
  const router = useRouter()
  const [search, setSearch] = useState('')

  function handleSearch(e: FormEvent) {
    e.preventDefault()

    const x = window.scrollX
    const y = window.scrollY
    window.onscroll = function () {
      window.scrollTo(x, y)
    }

    setTimeout(() => {
      window.onscroll = function () {
        window.scrollTo()
      }
    }, 1000)

    router.push(`
    ?q=${encodeURIComponent(search)}
    `)

    setSearch('')
  }

  return (
    <>
      <Search className={className}>
        <form onSubmit={handleSearch}>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            name="search"
            placeholder="Pesquisar"
          />
          <button type="submit">
            <FaSearch size={30} color="#5DB7E3" />
          </button>
        </form>
      </Search>
    </>
  )
}
export default SearchForm
