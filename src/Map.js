import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import axios from 'axios';
const styles = {
  width: "100vw",
  height: "calc(100vh)",
  position: "absolute"
};

mapboxgl.accessToken = 'pk.eyJ1IjoibXVoYW1tYW1haXJhaiIsImEiOiJja3RiOTNlNW4waWE2MndteTJhdDAxcHp5In0.tJ5CIrPNzxz5arJqYfF7Yg';

const Map = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
 
  useEffect(() => {
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [30.3753, 69.3451],
        zoom: 12
      });
       // Creates new direction
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving'
    });
    
    // Integrates directions control with map
    map.addControl(directions, 'top-left');
    map.addControl(new mapboxgl.NavigationControl());
    //     // Add toggle FullScreen
        map.addControl(new mapboxgl.FullscreenControl());
           // Add geolocate control to the map.
        map.addControl(
        new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
      },
      // When active the map will receive updates to the device's location as it changes.
      trackUserLocation: true,
      // Draw an arrow next to the location dot to indicate which direction the device is heading.
      showUserHeading: true
      })
      );
      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };
  

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return (
  <div ref={el => (mapContainer.current = el)} style={styles} >
     <div class="form-group">
          <label for="lat">Latitude</label>
          <input type="text" class="form-control" id="lat"  ng-model="formData.lat" readonly />
              </div>
      <div class="form-group">
          <label for="lng">Longitude</label>
          <input type="text" class="form-control" id="lng"  ng-model="formData.lng" readonly />
            </div>
  </div>
  )
};

export default Map