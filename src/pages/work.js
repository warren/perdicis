import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Work Page</title>
      <Header/>
      <div className="generic-page-content">
        <h1>Work</h1>
        <div>Page under construction. In the meanwhile visit <a href="https://warrenpartridge.me">my old site</a>.</div>
      </div>
      <Footer/>
    </main>
  )
}

export default IndexPage
