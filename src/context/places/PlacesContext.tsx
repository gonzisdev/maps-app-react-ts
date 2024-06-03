import { createContext, useEffect, useReducer } from "react";
import { PlacesState, placesReducer, INITIAL_STATE } from "./placesReducer";
import { getUserLocation } from "../../helpers/getUserLocation";
import { searchApi } from "../../apis/searchApi";
import type { Feature, PlacesResponse } from "../../types/places";

type PlacesContextProps = PlacesState & {
    searchPlacesByTerm: (query: string) => Promise<Feature[]>
}

type PlacesProviderProps = {
    children: React.JSX.Element | React.JSX.Element[]
}

export const PlacesContext = createContext<PlacesContextProps>(null!)

export const PlacesProvider = ({children} : PlacesProviderProps) => {

    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE)

    useEffect(() => {
        getUserLocation()
            .then(lngLat => dispatch({type: 'setUserLocation', payload: lngLat}))
    }, [])

    const searchPlacesByTerm = async (query : string) : Promise<Feature[]> => {
        if (query.length === 0) {
            dispatch({type: 'setPlaces', payload: []})
            return []
        }
        if (!state.userLocation) throw new Error('No hay ubicación del usuario')
        dispatch({type: 'setLoadingPlaces'})
        const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
            params: {
                proximity: state.userLocation.join(',')
            }
        })
        dispatch({type: 'setPlaces', payload: resp.data.features})
        return resp.data.features
    }

    return(
        <PlacesContext.Provider
            value={{
                ...state,
                searchPlacesByTerm
            }}
        >
            {children}
        </PlacesContext.Provider>
    )
}