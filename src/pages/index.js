import * as React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/sitewide.css" // NOTE: This import affects downstream child pages.


const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Header shouldRenderSitemap={false}/>
      <div className="centered">
        <h1 id="my-name">Warren Partridge</h1>
        <MainLinkBox/>
      </div>
      <Footer/>
    </main>
  )
}

const MainLinkBox = () => {
  return (
    <div>
      <Link to="/art">art</Link>
      ·
      <a href="notes">notes</a>
      ·
      <Link to="/puzzls">puzzles</Link>
      ·
      <Link to="/work">work</Link>
    </div>
    )
}

export default IndexPage
