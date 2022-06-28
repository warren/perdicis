import * as React from "react"
import { Link } from "gatsby"


const Footer = () => {
  return (
    <div className="centered">
      <span>© Current year · </span>
      <Link to="/about">About this site</Link>
    </div>
  )
}

export default Footer
