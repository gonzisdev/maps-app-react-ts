import React from 'react'
import ReactDOM from 'react-dom/client'
import { MapsApp } from './MapsApp'
import mapboxgl from 'mapbox-gl'
import './index.css'

mapboxgl.accessToken = 'pk.eyJ1IjoiZ29uemlzIiwiYSI6ImNsd3c2NHk3NDB6azQybXM3YmxsdWh1aDYifQ.FSlv3lyffBKyqZuJCriF7g'

if (!navigator.geolocation) {
  alert('Tu navegador no tiene la opción de geolocalización')
  throw new Error('Tu navegador no tiene la opción de geolocalización')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
)
