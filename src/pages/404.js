import * as React from "react"
import { Link } from "gatsby"

// markup
const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <div className="content">
        <h1>Page not found</h1>
        <div>
          <Link to="/">Go home</Link>.
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage
