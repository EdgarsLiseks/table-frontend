import Navigation from "../Navigation/Navigation"

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="vite.svg" alt="React app logo" />
        </div>

        <div className="nav">
          <Navigation />
        </div>
      </header>
    </>
  )
}
export default Header