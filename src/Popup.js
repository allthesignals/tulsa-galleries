import React from 'react';

const Popup = (props) => {
  const { onClose, popupInfo } = props;

  return (
    <div
      className='absolute bottom-0 p-0.5 w-full h-full z-10 flex flex-col flex-col-reverse pointer-events-none'
    >
      <div
        className='bg-white m-3 p-3 rounded-md relative shadow-lg basis-1/3 pointer-events-auto overflow-y-scroll'
      >
        <div
          className='absolute top-0.5 right-2 cursor-pointer'
          onClick={onClose}
        >
          X
        </div>
        <div
          className='bg-cover bg-center h-full'
          style={{backgroundImage: `url('https://picsum.photos/200/300?random=${popupInfo.Name}')`}}
        >
          <h2 className='bg-white/75 box-content m-3 p-0.5 inline-block'>{popupInfo.Name}</h2>
        </div>
      </div>
    </div>
  );
}

export default Popup;
