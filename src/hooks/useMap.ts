import { useContext } from "react"
import { MapContext } from "../context/map/MapContext"

export const useMap = () => useContext(MapContext)