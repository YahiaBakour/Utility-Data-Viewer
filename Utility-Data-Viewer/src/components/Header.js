import React from 'react';

const Header = (props) => (
  <div id="Header">
    <h1>{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
  </div>
);

Header.defaultProps = {
  title: 'Solstice'
};

export default Header;
