import React from 'react';

const List = function (props) {
  const { data } = props;

  // display Featured first
  data.sort((a, b) => a.Featured ? -1 : 1);

  return (
    <div className={`${props.className}`}>
      <div className='container mx-auto p-2'>
        {data.map((gallery, index) =>
          <div
            key={`list-item-${index}`}
            className='rounded-md bg-mustard m-1 p-1'
          >
            <h2>{gallery.Featured ? 'Featured:' : ''} {gallery.Name}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default List;
