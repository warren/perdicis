import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <main>
      <title>About Page</title>
      <Header/>
      <div className="generic-page-content">
        <h1>About</h1>
        <div>
          My goal with this site is to tie together all my online personas because I'm a hipster and wanted to make a gatsby project. I got the idea from <a href="https://www.drorpoleg.com/on-the-internet-nobodys-knows-youre/">this article</a>.

          <br/><br/>

          This website's code is open-source at <a href="https://github.com/warren/perdicis">github.com/warren/perdicis</a>.
        </div>
      </div>
      <Footer/>
    </main>
  )
}

export default IndexPage
