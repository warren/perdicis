import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <main>
      <title>Art</title>
      <Header/>
      <div className="generic-page-content">
        <h1>Art</h1>
        <div>
          <h2>
            Painting
            - <a href="https://www.instagram.com/ryxlian">@ryxlian</a>
          </h2>
          <div>
            I take inspiration from a bunch of artists - to name a few: <a href="https://www.instagram.com/sinixdesign">Sinix</a>, <a href="https://www.instagram.com/jenzee_art">Jen Zee</a>, <a href="https://www.instagram.com/tb_choi">TB Choi</a>, <a href="https://www.instagram.com/esbenlash">Esben Lash</a>, <a href="https://www.instagram.com/velinxi">Velinxi</a>, and similar artists who paint traditional styles digitally. Also <a href="https://wikipedia.org/wiki/J._C._Leyendecker">J.C. Leyendecker</a>.
          </div>
          <h2>
            Photography
            - <a href="https://www.instagram.com/ambifrey">@ambifrey</a>
          </h2>
          <div>
            I post shots from my various smartphone cameras and Fujifilm X-T200.
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  )
}

export default IndexPage
