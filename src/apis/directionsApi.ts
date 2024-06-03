import axios from 'axios'

export const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: 'false',
        access_token: 'pk.eyJ1IjoiZ29uemlzIiwiYSI6ImNsd3c2NHk3NDB6azQybXM3YmxsdWh1aDYifQ.FSlv3lyffBKyqZuJCriF7g'
    }
})