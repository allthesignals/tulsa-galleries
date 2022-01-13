import React from 'react';
import ReactMapGL, { Popup } from 'react-map-gl';
import Pins from './Pins.js';

const MAPBOX_GL_TOKEN = 
  'pk.eyJ1Ijoid21hdHRnYXJkbmVyIiwiYSI6ImNreWF4eTlhNzBhMjkybnBscWwwcTA2M3EifQ.GRfK3-Kc7CC72BDwfywAsQ';
const TULSA = [36.1540, -95.9928];

const Map = function (props) {
  const { data } = props;

  const [viewport, setViewport] = React.useState({
    latitude: TULSA[0],
    longitude: TULSA[1],
    zoom: 8,
  });
  const [popupInfo, setPopupInfo] = React.useState(null);

  return (
    <ReactMapGL
      {...viewport}
      width='100%'
      height='100%'
      onViewportChange={viewport => setViewport(viewport)}
      mapboxApiAccessToken={MAPBOX_GL_TOKEN}
    >
      <Pins
        data={data}
        handleClick={setPopupInfo}
      />

      {popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.Longitude}
          latitude={popupInfo.Latitude}
          closeOnClick={false}
          onClose={setPopupInfo}
        >
          {popupInfo.Name}
        </Popup>
      )}
    </ReactMapGL>
  );
}

Map.propTypes = {};

Map.defaultProps = {};

export default Map;
