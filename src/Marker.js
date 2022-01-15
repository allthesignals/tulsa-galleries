import React from 'react';
import { Marker as MapboxMarker } from 'react-map-gl'

const SIZE = 40;

const Marker = (props) => (
  <MapboxMarker { ...props }
    offsetTop={-SIZE}
  >
    <img
      src="/images/art-pin.png"
      alt="pin"
      style={{ height: SIZE }}
    />
  </MapboxMarker>
);

export default React.memo(Marker);
