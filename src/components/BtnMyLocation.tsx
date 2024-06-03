import { useMap } from "../hooks/useMap"
import { usePlaces } from "../hooks/usePlaces"

export const BtnMyLocation = () => {

  const { map, isMapReady } = useMap()
  const { userLocation } = usePlaces()

  const onClick = () => {
    if (!isMapReady) throw new Error('El mapa no está listo')
    if (!userLocation) throw new Error('No hay ubicación de usuario')
    map?.flyTo({
      zoom: 14,
      center: userLocation
    })
  }

  return (
    <button 
      onClick={onClick}
      className="btn btn-primary"
      style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 999
      }}
    >
        Mi ubicación
    </button>
  )
}
