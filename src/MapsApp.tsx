import { MapProvider } from "./context/map/MapContext"
import { PlacesProvider } from "./context/places/PlacesContext"
import { HomeScreen } from "./screens/HomeScreen"

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  )
}
