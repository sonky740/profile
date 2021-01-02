import React from "react";
import { Link } from "gatsby";
import "../../static/scss/common.scss";

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      {/* <!-- ### 헤더 ### --> */}
      <header className="header">
        <h1>
          <Link to="/">Sonky</Link>
        </h1>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>

      {children}
    </div>
  )
}