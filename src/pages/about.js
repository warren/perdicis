import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <main>
      <title>About Page</title>
      <Header/>
      <h1>About</h1>
      <div>
        A friend once described this website as a "mega portfolio." I think that's pretty accurate.

        <br/><br/>

        My goal is to tie together all of the versions of myself scattered online. I got the idea from <a href="https://www.drorpoleg.com/on-the-internet-nobodys-knows-youre/">this article</a>.

        <br/><br/>

        This website's code is open-source at <a href="https://github.com/warren/perdicis">github.com/warren/perdicis</a>.
      </div>

      <Footer/>
    </main>
  )
}

export default IndexPage
