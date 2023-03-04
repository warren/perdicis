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
        <div>Page under construction. For a slightly embarrassing blast from the past see <a href="https://warrenpartridge.me">my college portfolio</a>.

        <br/><br/>

        If you are looking to fill an SRE/dev ops or SWE role though, drop me a line at "my name at perdix dot org".
        </div>
      </div>
      <Footer/>
    </main>
  )
}

export default IndexPage
