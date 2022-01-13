import React from 'react';

const MapToggle = (props) => (
  <div className="toggle absolute bottom-5 w-full flex justify-center">
    <div
      className="bg-mustard cursor-pointer p-2 rounded-lg"
      onClick={props.handleClick}
    >
      {props.children}
    </div>
  </div>
);

export default MapToggle;
