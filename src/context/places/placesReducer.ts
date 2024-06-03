import type { Feature } from "../../types/places"

export type PlacesState = {
    isLoading: boolean
    userLocation?: [number, number]
    isLoadingPlaces: boolean
    places: Feature[]
}

type PlacesAction = {type: 'setUserLocation', payload: [number, number]} |
                    {type: 'setLoadingPlaces'} |
                    {type: 'setPlaces', payload: Feature[]}

export const INITIAL_STATE : PlacesState = {
    isLoading: true,
    userLocation: undefined,
    isLoadingPlaces: false,
    places: []
}

export const placesReducer = (state : PlacesState, action : PlacesAction) => {

    if (action.type === 'setUserLocation') {
        return{
            ...state,
            isLoading: false,
            userLocation: action.payload
        }
    }

    if(action.type === 'setLoadingPlaces') {
        return{
            ...state,
            isLoadingPlaces: true
        }
    }

    if (action.type === 'setPlaces') {
        return{
            ...state,
            isLoadingPlaces: false,
            places: action.payload
        }
    }

    return state
}