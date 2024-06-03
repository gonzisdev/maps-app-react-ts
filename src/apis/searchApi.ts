import axios from 'axios'

export const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiZ29uemlzIiwiYSI6ImNsd3c2NHk3NDB6azQybXM3YmxsdWh1aDYifQ.FSlv3lyffBKyqZuJCriF7g'
    }
})