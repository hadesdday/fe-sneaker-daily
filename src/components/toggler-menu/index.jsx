import React from 'react';
import "./style.scss";

function TogglerMenu(props) {
  return (
    <>
      <div id="toggle-menu" {...props}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}

export default TogglerMenu;