import { useLayoutEffect, useRef } from "react"
import mapboxgl from "mapbox-gl"
import { usePlaces } from "../hooks/usePlaces"
import { useMap } from "../hooks/useMap"
import { Loading } from "./Loading"

export const MapView = () => {

    const { isLoading, userLocation } = usePlaces()
    const { setMap } = useMap()
    const mapDiv = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        if (!isLoading) {
            const map = new mapboxgl.Map({
                container: mapDiv.current!, 
                style: 'mapbox://styles/mapbox/light-v11', 
                center: userLocation, 
                zoom: 14, 
            })
            setMap(map)
        }
    }, [isLoading])

    if (isLoading) return <Loading />
    
  return (
    <div 
        ref={mapDiv}
        style={{
            height: '100vh',
            width: '100vw',
            position: 'fixed',
            top: 0,
            left: 0
        
        }}
    >
        {userLocation?.join(',')}
    </div>
  )
}
