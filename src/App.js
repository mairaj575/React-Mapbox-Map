import React from 'react';
import './App.css';
import Map from './Map'
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
// import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

// mapboxgl.accessToken = 'pk.eyJ1IjoibXVoYW1tYW1haXJhaiIsImEiOiJja3RiOTNlNW4waWE2MndteTJhdDAxcHp5In0.tJ5CIrPNzxz5arJqYfF7Yg';

const App = () =>{
  return(
    <div>
      <Map />
    </div>
  )
}

export default App;

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       // center : {
//         lng : -73.985664 ,
//         lat : 40.748514
//       // }
//     }
//   }

//   componentDidMount() {
//     const {lng, lat} = this.state;
//        // Creates new map 
//     const map = new mapboxgl.Map({
//       container: this.mapWrapper,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [lng, lat],
//       // center : [24.860966, 66.990501],
//       // center : [37.0902, 95.7129],
//       zoom: 10
//     });

//        // Creates new direction
//     const directions = new MapboxDirections({
//       accessToken: mapboxgl.accessToken,
//       unit: 'metric',
//       profile: 'mapbox/driving'
//     });
//      
//     // Add zoom and rotation controls to the map.
// Integrates directions control with map
//     map.addControl(directions, 'top-left');
//     map.addControl(new mapboxgl.NavigationControl());
//     // Add toggle FullScreen
//     map.addControl(new mapboxgl.FullscreenControl());

//     // Add geolocate control to the map.
//   map.addControl(
//   new mapboxgl.GeolocateControl({
//   positionOptions: {
//   enableHighAccuracy: true
//   },
//   // When active the map will receive updates to the device's location as it changes.
//   trackUserLocation: true,
//   // Draw an arrow next to the location dot to indicate which direction the device is heading.
//   showUserHeading: true
//   })
//   );

//   }

//   render() {
//     return (
//       // Populates map by referencing map's container property
//       <div ref={el => (this.mapWrapper = el)} className="mapWrapper" />
//     );
//   }
// }

