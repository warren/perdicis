import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <main>
      <title>Puzzls</title>
      <Header/>
      <div className="generic-page-content">
        <h1>Puzzls</h1>
        <div>
          <div>I make puzzle hunts every winter holiday!

          <br/><br/>

          2020 and onwards I began reusing the same website for them. It's not on this page... but maybe you can find it anyhow?</div>
        </div>
      </div>
      <Footer/>
    </main>
  )
}

export default IndexPage
