import * as React from 'react';
import ReactMapGL from 'react-map-gl';
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
      <div className="absolute top-0 w-full z-10">
        <div class="bg-national-flag-blue border-b-12 border-mustard p-2 shadow-md">
          <div class="container mx-auto">
            <img
              src="/images/tulsa-flag-sigil.png"
              class="w-20 absolute"
            />
            <h1 class="text-bone ml-22">Galleries Tulsa</h1>
          </div>
        </div>
      </div>
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
