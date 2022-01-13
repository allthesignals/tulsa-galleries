import * as React from 'react';
import ReactMapGL from 'react-map-gl';
import Header from './components/Header/Header.js';
import './App.css';

const MAPBOX_GL_TOKEN='pk.eyJ1Ijoid21hdHRnYXJkbmVyIiwiYSI6ImNreWF4eTlhNzBhMjkybnBscWwwcTA2M3EifQ.GRfK3-Kc7CC72BDwfywAsQ';

function App() {
  const [viewport, setViewport] = React.useState({
    latitude: 36.1540,
    longitude: -95.9928,
    zoom: 8,
  });

  return (
    <>
      <Header />
      <ReactMapGL
        {...viewport}
        width='100%'
        height='100%'
        onViewportChange={viewport => setViewport(viewport)}
        mapboxApiAccessToken={MAPBOX_GL_TOKEN}
      />
    </>
  );
}

export default App;
