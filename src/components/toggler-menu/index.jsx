import React from 'react';
import "./style.scss";

function TogglerMenu(props) {

  function toggleOpen() {
    document.getElementById("toggle-menu").classList.toggle("open");
  }

  return (
    <>
      <div id="toggle-menu" onClick={toggleOpen}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}

export default TogglerMenu;