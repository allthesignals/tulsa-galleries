import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = () => (
  <div className="absolute top-0 w-full z-10">
    <div class="bg-national-flag-blue border-b-12 border-mustard p-2 shadow-md">
      <div class="container mx-auto">
        <img
          src="/images/tulsa-flag-sigil.png"
          class="w-20 absolute"
        />
        <h1 class="text-bone ml-22">Galleries Tulsa</h1>
      </div>
    </div>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
