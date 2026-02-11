import { useEffect, useState, useRef } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

function Pokedex() {
  const [trainer, setTrainer] = useState("")
  const mapRef = useRef()
  const mapContainerRef = useRef()

  const INITIAL_CENTER = [-86.8515, 21.1619]
  const INITIAL_ZOOM = 12

  useEffect(() => {
    const nombre = localStorage.getItem("trainer_current")
    setTrainer(nombre)

    mapboxgl.accessToken =
      "pk.eyJ1IjoibWF0dGVvaXNhaSIsImEiOiJjbWw3aHN4b2Ywcmp0M2twdG1uc2w0NjE1In0.ZPsl6_z_CzcVTlfV7fO14w"

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: INITIAL_CENTER,
      zoom: INITIAL_ZOOM,
    })

    // Marcadores
    new mapboxgl.Marker({ color: "turquoise" })
      .setLngLat([-86.84698817661992, 21.049591777377092])
      .addTo(mapRef.current)

    new mapboxgl.Marker({ color: "black" })
      .setLngLat([-86.8234021593428, 21.200617037493625])
      .addTo(mapRef.current)

    new mapboxgl.Marker({ color: "orange" })
      .setLngLat([-86.90656000161405, 21.182906762438783])
      .addTo(mapRef.current)

    new mapboxgl.Marker({ color: "green" })
      .setLngLat([-86.92788226690791, 21.16090723975761])
      .addTo(mapRef.current)

    new mapboxgl.Marker({ color: "#1064b8" })
      .setLngLat([-86.83548703235746, 21.138525125714963])
      .addTo(mapRef.current)

    new mapboxgl.Marker({ color: "purple" })
      .setLngLat([-86.84750142701677, 21.05069444158195])
      .addTo(mapRef.current)

    return () => {
      mapRef.current.remove()
    }
  }, [])

  return (
    <div className="layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul>
          <li>Dashboard</li>
          <li>Pokemones</li>
          <li>Mapa</li>
          <li>Configuración</li>
          <li>Salir</li>
        </ul>
      </aside>

      {/* Contenido principal */}
      <main className="contenido">
        <div className="bienvenidocuadro">
          <h1>Bienvenido Entrenador {trainer}</h1>
        </div>

        <div className="stats">
          <div className="stat">30 capturados</div>
          <div className="stat">10 liberados</div>
          <div className="stat">5 categorías</div>
        </div>

        <div className="acciones">
          <div className="buscador">
            <p>Buscador de Pokémon</p>
            <input type="text" placeholder="Buscar Pokémon..." />
          </div>
          <div className="mapa">
            <p>Mapa</p>
            <div id="map-container" ref={mapContainerRef}></div>
          </div>
        </div>

        <footer className="footer">
          Desarrollado por Mateo Isai Moo Huchin
        </footer>
      </main>
    </div>
  )
}

export default Pokedex
