import { useContext } from "react"
import { PlacesContext } from "../context/places/PlacesContext"

export const usePlaces = () => useContext(PlacesContext)

