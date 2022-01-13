import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = () => (
  <div className="absolute top-0 w-full z-10">
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

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
