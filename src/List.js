import React from 'react';

const List = function (props) {
  const { data } = props;

  return (
    <div className='container mx-auto p-12'>
      {data.map(gallery =>
        <div className='rounded-md bg-mustard m-1 p-1'>
          <h2>{gallery.Name}</h2>
        </div>
      )}
    </div>
  );
}

List.propTypes = {};

List.defaultProps = {};

export default List;
