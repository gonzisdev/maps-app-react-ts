import { useRef } from "react"
import { usePlaces } from "../hooks/usePlaces"
import { SearchResults } from "./SearchResults"

export const SearchBar = () => {

    const { searchPlacesByTerm } = usePlaces()

    const debounceRef = useRef<NodeJS.Timeout>()

    const onQueryChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        if (debounceRef.current) clearTimeout(debounceRef.current)
        debounceRef.current = setTimeout(() => {
            searchPlacesByTerm(e.target.value)
        }, 1000)
    }

  return (
    <div className="search-container">
        <input 
            type="text" 
            className="form-control" 
            placeholder="Buscar un lugar..." 
            onChange={onQueryChange}
        />
        <SearchResults />
    </div>
  )
}
