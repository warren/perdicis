import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <main>
      <title>Puzzles</title>
      <Header/>
      <div className="generic-page-content">
        <h1>Secret</h1>
        <p>You found me!</p>
      </div>
      <Footer/>
    </main>
  )
}

export default IndexPage
