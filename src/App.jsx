import { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css'
import './App.css'

import Dashboard from './components/Dashboard'
import Quotes from './components/Quotes'


const INITIAL_CENTER = [-86.8515, 21.1619] 
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




    //MARCADORES EN EL MAPA

    const marker1 = new mapboxgl.Marker({color: 'turquoise'})
    .setLngLat([ -86.84698817661992, 21.049591777377092])
    .addTo(mapRef.current);


    const marker2 = new mapboxgl.Marker({color: 'black'})
    .setLngLat([ -86.8234021593428, 21.200617037493625])
    .addTo(mapRef.current);


    const marker3 = new mapboxgl.Marker({color: 'orange'})
    .setLngLat([-86.90656000161405, 21.182906762438783])
    .addTo(mapRef.current);

     const marker4 = new mapboxgl.Marker({color: 'green'})
    .setLngLat([-86.92788226690791, 21.16090723975761])
    .addTo(mapRef.current);

    const marker5 = new mapboxgl.Marker({color: '#1064b8'})
    .setLngLat([ -86.83548703235746, 21.138525125714963])
    .addTo(mapRef.current);

    const marker6 = new mapboxgl.Marker({color: 'purple'})
    .setLngLat([ -86.84750142701677, 21.05069444158195])
    .addTo(mapRef.current);






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
    <h1>Bienvenidos</h1>

    <Dashboard />
    <Quotes />

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
