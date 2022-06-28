import * as React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"


const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Header shouldRenderSitemap={false}/>
      <h1>Warren Partridge</h1>
      <MainLinkBox/>
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
