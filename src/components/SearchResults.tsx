import { useState } from "react"
import { useMap } from "../hooks/useMap"
import { usePlaces } from "../hooks/usePlaces"
import type { Feature } from "../types/places"

export const SearchResults = () => {

    const { places, isLoadingPlaces, userLocation } = usePlaces()
    const { map, getRouteBetweenPoints } = useMap()

    const [activeId, setActiveId] = useState('')

    const onPlaceClicked = (place : Feature) => {
        const [lng, lat] = place.center
        setActiveId(place.id)
        map?.flyTo({
            zoom: 14,
            center: [lng, lat]
        })
    }

    const getRoute = (place : Feature) => {
        if (!userLocation) return
        const [lng, lat] = place.center
        getRouteBetweenPoints(userLocation, [lng, lat])
    }

    if(isLoadingPlaces) {
        return (
            <div className="alert alert-primary mt-2 text-center">
                <h6>Buscando</h6>
                <p>Espera por favor</p>
            </div>
        )
    }

    if(places.length === 0) return <></>

  return (
    <ul className="list-group mt-3">
        {
            places.map(place => (
                <li
                    key={place.id}
                    className={`list-group-item list-group-item-action pointer ${activeId === place.id ? 'active' : ''}`}
                    onClick={() => onPlaceClicked(place)}
                >
                    <h6>{place.text_es}</h6>
                    <p 
                        style={{
                            fontSize: '12px'
                        }}
                    >
                        {place.place_name_es}
                    </p>
                    <button onClick={() => getRoute(place)} className={`btn btn-sm ${activeId === place.id ? 'btn-outline-light' : 'btn-outline-primary'}`}>
                        Direcciones
                    </button>
                </li>
            ))
        }
    </ul>
  )
}
