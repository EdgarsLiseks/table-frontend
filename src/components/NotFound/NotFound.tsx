import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
      <div className="not-found">
        <div className="title">
          <span>404</span>
        </div>
        <div className="subtitle">
          Page not found
        </div>
        <div className="action">
          <Link to='/' className="btn -primary">
            Back to homepage
          </Link>
        </div>
      </div>
    </>
  )
}
export default NotFound