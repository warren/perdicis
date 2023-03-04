import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Notes Page</title>
      <Header/>
      <div className="generic-page-content">
        <h1>Notes</h1>
        <div>Page under construction. Eventually <a href="https://notes.perdicis.com">notes.perdicis.com</a> will move in here and start paying rent.</div>
      </div>
      <Footer/>
    </main>
  )
}

export default IndexPage
