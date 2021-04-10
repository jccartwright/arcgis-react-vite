import React, { useEffect, useRef, useState } from 'react'
import ArcGISMap from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"
import esriConfig from '@arcgis/core/config.js';
import './App.css'

function App() {
  // required if not in ./public/assets
  // esriConfig.assetsPath = './esri_assets'; 
  const mapDiv = useRef(null)

  useEffect(() => {
    if (mapDiv.current) {

      const map = new ArcGISMap({
        basemap: "gray-vector",
      });

      const view = new MapView({
        map,
        container: mapDiv.current,
        extent: {
          spatialReference: {
            wkid: 102100,
          },
          xmax: -13581772,
          xmin: -13584170,
          ymax: 4436367,
          ymin: 4435053,
        },
      });
    } else {
      console.warn('no mapDiv')
    }
  }, [])

  return (
    <div className="App">
      <div className="mapDiv" ref={mapDiv}>
      </div>
    </div>
  )
}

export default App
