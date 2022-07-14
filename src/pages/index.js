import * as React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/sitewide.css" // NOTE: This import affects downstream child pages.


const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      {/* <Header shouldRenderSitemap={false}/> */}
      <div className="centered-landing-container">
        <h1 id="landing-title">Of a<br/>Partridge</h1>
        <MainLinkBox/>
      </div>
      <Footer/>
    </main>
  )
}

const MainLinkBox = () => {
  return (
    <ul className="dot-separated-list">
      <li><Link to="/art">art</Link></li>
      <li><Link to="/notes">notes</Link></li>
      <li><Link to="/puzzls">puzzles</Link></li>
      <li><Link to="/work">work</Link></li>
    </ul>
    )
}

export default IndexPage
