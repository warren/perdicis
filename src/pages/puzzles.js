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
        <div>You found it! Go forth and puzzle: <a href="https://christmas-puzzle-2020.onrender.com/">christmas-puzzle-2020.onrender.com</a></div>
      </div>
      <Footer/>
    </main>
  )
}

export default IndexPage
