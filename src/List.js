import React from 'react';

const List = function (props) {
  const { data } = props;

  return (
    <div className={`${props.className}`}>
      <div className='container mx-auto p-12'>
        {data.map((gallery, index) =>
          <div
            key={`list-item-${index}`}
            className='rounded-md bg-mustard m-1 p-1'
          >
            <h2>{gallery.Name}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default List;
