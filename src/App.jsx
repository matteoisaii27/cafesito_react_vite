import { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css'
import './App.css'

const INITIAL_CENTER = [-86.8515, 21.1619] // Cancún
const INITIAL_ZOOM = 12

function App() {

  const handleButtonClick = () => {
  mapRef.current.flyTo({
    center: INITIAL_CENTER,
    zoom: INITIAL_ZOOM
  })
}

  const mapRef = useRef()
  const mapContainerRef = useRef()

  const [center, setCenter] = useState(INITIAL_CENTER)
  const [zoom, setZoom] = useState(INITIAL_ZOOM)

  useEffect(() => {

    mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGVvaXNhaSIsImEiOiJjbWw3aHN4b2Ywcmp0M2twdG1uc2w0NjE1In0.ZPsl6_z_CzcVTlfV7fO14w'

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: center,
      zoom: zoom
    })

    // ESCUCHAR MOVIMIENTO DEL MAPA
    mapRef.current.on('move', () => {

      const mapCenter = mapRef.current.getCenter()
      const mapZoom = mapRef.current.getZoom()

      setCenter([mapCenter.lng, mapCenter.lat])
      setZoom(mapZoom)
    })

    return () => {
      mapRef.current.remove()
    }

  }, [])

  return (
  <>
    <div className="sidebar">
      Longitude: {center[0].toFixed(4)} | 
      Latitude: {center[1].toFixed(4)} | 
      Zoom: {zoom.toFixed(2)}
    </div>

    <button className="reset-button" onClick={handleButtonClick}>
      Reset
    </button>

    <div id="map-container" ref={mapContainerRef}></div>
  </>
)

}

export default App
