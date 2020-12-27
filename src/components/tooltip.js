import React from "react";
import "../../static/scss/common.scss";

export default function Tooltip({ text, children }) {
  const handleTooltip = (e) => {
    e.preventDefault();

    if (e.target.parentNode.classList.contains('active')) {
      e.target.parentNode.classList.remove('active');
    } else {
      e.target.parentNode.classList.add('active');
    }
  }

  return (
    <div data-tooltip="click">
      <a href="?none" className="btn-type1" target="_blank" rel="noreferrer" onClick={handleTooltip}>{text}</a>
      <div>{children}</div>
    </div>
  )
}