import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <main>
      <title>Art</title>
      <Header/>
      <h1>Art</h1>
      <div>
        <h2>Painting</h2>
        <div>
          I've been drawing since middle school and digitally painting since college (2016).

          <br/><br/>

          Low res images and speedpaints are on Instagram under <a href="https://www.instagram.com/ryxlian">@ryxlian</a>.

          <br/><br/>

          I take inspiration from a bunch of artists - to name a few: <a href="https://www.instagram.com/sinixdesign">Sinix</a>, <a href="https://www.instagram.com/jenzee_art">Jen Zee</a>, <a href="https://www.instagram.com/tb_choi">TB Choi</a>, <a href="https://www.instagram.com/esbenlash">Esben Lash</a>, <a href="https://www.instagram.com/velinxi">Velinxi</a>, and similar artists who paint traditional styles digitally. Also <a href="https://wikipedia.org/wiki/J._C._Leyendecker">J.C. Leyendecker</a>.
        </div>
        <h2>Photography</h2>
        <div>
          I've gotten some neat shots since buying a camera in 2021!

          <br/><br/>

          Low res images are on Instagram under <a href="https://www.instagram.com/ambifrey">@ambifrey</a>.
        </div>
      </div>
      <Footer/>
    </main>
  )
}

export default IndexPage
