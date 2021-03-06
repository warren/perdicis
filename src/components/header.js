import * as React from "react"
import { Link } from "gatsby"
import "../styles/header.css"


class Header extends React.Component {
  render() {
    // var sitemap = <span>unset</span>

    // if (this.props.shouldRenderSitemap === true) {
    //   sitemap = <span>(Render sitemap)</span>
    // } else {
    //   sitemap = <span>(Do NOT render sitemap)</span>
    // }

    return (
      <div id="header">
        <Link to="/">←</Link>
      </div>
    )
  }
}

Header.defaultProps = {
  shouldRenderSitemap: true  // TODO: Figure out how to selectively play the render animation. Maybe another bool to indicate this.
}


export default Header
