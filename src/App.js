import * as React from 'react';
import ReactMapGL from 'react-map-gl';
import Header from './components/Header/Header.js';
import { csv } from 'd3-fetch';
import './App.css';

const MAPBOX_GL_TOKEN = 
  'pk.eyJ1Ijoid21hdHRnYXJkbmVyIiwiYSI6ImNreWF4eTlhNzBhMjkybnBscWwwcTA2M3EifQ.GRfK3-Kc7CC72BDwfywAsQ';
const GALLERIES_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRV476aaXFgAknoXAMO7nnbSbm0oIRdggzeRw7LUSv7QwMAQHrtM2rC3bRJmCOaOK_IGWA2wcfpj3eK/pub?gid=0&single=true&output=csv';

function App() {
  const [viewport, setViewport] = React.useState({
    latitude: 36.1540,
    longitude: -95.9928,
    zoom: 8,
  });

  const [galleries, setGalleries] = React.useState([]);

  React.useEffect(async () => {
    const galleries = await csv(GALLERIES_URL);

    setGalleries(galleries);
  }, []);

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
