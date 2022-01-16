import React from 'react';

const Popup = (props) => {
  const { onClose, popupInfo } = props;

  return (
    <div
      className='absolute bottom-0 p-0.5 w-full h-full z-10 flex flex-col flex-col-reverse pointer-events-none'
    >
      <div
        className='bg-white m-3 p-3 rounded-md relative shadow-lg basis-1/3 pointer-events-auto'
      >
        <div
          className='absolute top-0.5 right-2 cursor-pointer'
          onClick={onClose}
        >
          X
        </div>

        <h1>{popupInfo.Name}</h1>
        <h2>{popupInfo['Full Address']}</h2>
        <h4>{popupInfo.Size}</h4>
      </div>
    </div>
  );
}

export default Popup;
