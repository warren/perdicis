import * as React from "react"
import { Link } from "gatsby"
import "../styles/footer.css"


const Footer = () => {
  return (
  	<div id="footer-div">
      <ul className="dot-separated-list">
        <li>© Current year</li>
        <li><Link to="/about">About this site</Link></li>
      </ul>
    </div>
  )
}

export default Footer
