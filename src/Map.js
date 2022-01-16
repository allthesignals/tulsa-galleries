import { useState, useEffect, useRef } from 'react';
import ReactMapGL, { WebMercatorViewport } from 'react-map-gl';
import bbox from '@turf/bbox';
import { lineString } from '@turf/helpers';
import Pins from './Pins.js';
import Popup from './Popup.js';

const MAPBOX_GL_TOKEN = 
  'pk.eyJ1Ijoid21hdHRnYXJkbmVyIiwiYSI6ImNreWF4eTlhNzBhMjkybnBscWwwcTA2M3EifQ.GRfK3-Kc7CC72BDwfywAsQ';
const TULSA = [36.1540, -95.9928];
const DEFAULT_VIEWPORT = {
  latitude: TULSA[0],
  longitude: TULSA[1],
  zoom: 8,
};

const Map = function (props) {
  const { data } = props;

  const mapRef = useRef(null);
  const [viewport, setViewport] = useState(DEFAULT_VIEWPORT);
  const [popupInfo, setPopupInfo] = useState(null);

  useEffect(() => {
    if (data.length) {
      const { width, height } = mapRef.current.getBoundingClientRect();
      const { longitude, latitude, zoom } = computeBoundingBox(data, { width, height });

      setViewport({
        longitude,
        latitude,
        zoom,
      });
    }
  }, [data]);

  return (
    <div
      className={`map-container ${props.className} relative`}
      ref={mapRef}
    >
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
          handleClick={(pin) => {
            setPopupInfo(pin);

            setViewport({
              ...viewport,
              longitude: pin.Longitude,
              latitude: pin.Latitude,
              transitionDuration: 250,
            })
          }}
        />
      </ReactMapGL>

      {popupInfo && (
        <Popup
          onClose = {() => {setPopupInfo(null)}}
          popupInfo = {popupInfo}
        />
      )}
    </div>
  );
}

function computeBoundingBox(data, viewport) {
  const line = lineString(data.map(point => [point.Longitude, point.Latitude]));
  const [minLng, minLat, maxLng, maxLat] = bbox(line);
  const vp = new WebMercatorViewport(viewport);

  return vp.fitBounds(
    [[minLng, minLat], [maxLng, maxLat]], {
      // note: certain padding values cannot exceed some height/width combo for some reason
      padding: 40,
    },
  );
}

export default Map;
