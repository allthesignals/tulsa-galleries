import React from 'react';

const Header = (props) => (
  <div className={props.float ? "absolute top-0 w-full z-10" : "w-full"}>
    <div className="bg-national-flag-blue border-b-12 border-mustard p-2 shadow-md">
      <div className="container mx-auto">
        <img
          src="/images/tulsa-flag-sigil.png"
          className="w-20 absolute"
        />
        <h1 className="text-bone ml-22">Galleries Tulsa</h1>
      </div>
    </div>
  </div>
);

export default Header;
