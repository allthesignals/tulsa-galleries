import { useState, useEffect } from 'react';
import ReactMapGL, { Popup, WebMercatorViewport } from 'react-map-gl';
import bbox from '@turf/bbox';
import { lineString } from '@turf/helpers';
import Pins from './Pins.js';

const MAPBOX_GL_TOKEN = 
  'pk.eyJ1Ijoid21hdHRnYXJkbmVyIiwiYSI6ImNreWF4eTlhNzBhMjkybnBscWwwcTA2M3EifQ.GRfK3-Kc7CC72BDwfywAsQ';
const TULSA = [36.1540, -95.9928];
const DEFAULT_VIEWPORT = {
  latitude: TULSA[0],
  longitude: TULSA[1],
  zoom: 8,

  // todo: need to calculate exact pixel values instead of css percentages
  width: 600,
  height: 800,
};

const Map = function (props) {
  const { data } = props;

  const [viewport, setViewport] = useState(DEFAULT_VIEWPORT);
  const [popupInfo, setPopupInfo] = useState(null);

  useEffect(() => {
    if (data.length) {
      const line = lineString(data.map(point => [point.Longitude, point.Latitude]));
      const [minLng, minLat, maxLng, maxLat] = bbox(line);
      const vp = new WebMercatorViewport(DEFAULT_VIEWPORT);
      const { longitude, latitude, zoom } = vp.fitBounds(
        [[minLng, minLat], [maxLng, maxLat]], {
          padding: 20
        },
      );

      setViewport({
        longitude,
        latitude,
        zoom,
      });
    }
  }, [data]);

  return (
    <ReactMapGL
      {...viewport}

      /* todo: need to calculate exact pixel values instead of css percentages */
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

export default Map;
