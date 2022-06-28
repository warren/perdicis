import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <main>
      <title>Puzzles</title>
      <Header/>
      <h1>Puzzls</h1>
      <div>
        <div>I write a mini puzzle hunt every winter holiday!</div>
        <ul>
          <li>2019: <a href="https://christmas-puzzle-2019.herokuapp.com">christmas-puzzle-2019.herokuapp.com</a></li>
          <li>2020 & 2021: <a href="https://christmas-puzzle-2020.herokuapp.com">christmas-puzzle-2020.herokuapp.com</a></li>
          <li>2022: This page... wait, where'd it go?</li>
        </ul>
        <div>Note: The newer hunts are fairer (and probably more fun) than the older ones.</div>
      </div>
      <Footer/>
    </main>
  )
}

export default IndexPage
