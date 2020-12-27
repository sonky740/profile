import React from "react";
import { Link } from "gatsby";
import "../../static/scss/common.scss";

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      {/* <!-- ### 헤더 ### --> */}
      <header className="header">
        <div>
          <h1>
            <Link to="/">Sonky</Link>
          </h1>
        </div>
      </header>

      {children}
    </div>
  )
}