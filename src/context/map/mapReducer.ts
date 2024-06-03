import { Map, Marker } from "mapbox-gl"

export type MapState = {
    isMapReady: boolean
    map?: Map,
    markers: Marker[]
}

type MapAction = {type: 'setMap', payload: Map} |
                 {type: 'setMarkers', payload: Marker[]}

export const INITIAL_STATE : MapState = {
    isMapReady: false,
    map: undefined,
    markers: []
}

export const mapReducer = (state : MapState, action : MapAction) => {

    if (action.type === 'setMap') {
        return{
            ...state,
            isMapReady: true,
            map: action.payload
        }
    }

    if (action.type === 'setMarkers') {
        return{
            ...state,
            markers: action.payload
        }
    }

    return state
}