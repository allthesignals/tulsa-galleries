import React from 'react';
import Marker from './Marker';

const Pins = function(props) {
  const {data, handleClick} = props;

  return data.map((pin, index) =>
    <Marker
      key={`marker-${index}`}
      longitude={pin.Longitude}
      latitude={pin.Latitude}
      onClick={() => handleClick(pin)}
    />
  )
}

Pins.propTypes = {};

Pins.defaultProps = {};

export default React.memo(Pins);
