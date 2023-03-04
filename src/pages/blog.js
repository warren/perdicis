import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

// markup
const BlogPage = () => {
  return (
    <main>
      <title>Blog Page</title>
      <Header/>
      <div className="generic-page-content">
        <h1>Blog</h1>
        <div>I made a substack: <a href="https://perdicis.substack.com">perdicis.substack.com</a></div>
      </div>
      <Footer/>
    </main>
  )
}

export default BlogPage
