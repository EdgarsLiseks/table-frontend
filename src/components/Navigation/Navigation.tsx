// import { useState } from "react"
import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <nav>
      <div className="navigation">
        <NavLink to="/table" className={({isActive}) => isActive ? 'nav-left -active' : 'nav-left'  }>
          <ul>
            <li className="nav-item">
              Data table
            </li>
          </ul>
        </NavLink>

        <NavLink to="/" className={({isActive}) => isActive ? 'nav-right -active' : 'nav-right'  }>
          <ul>
            <li className="nav-item">
              About us
            </li>
          </ul>
        </NavLink>
      </div>
    </nav>
  )
}
export default Navigation