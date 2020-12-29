import { Fragment } from "react"
import { NavLink } from "react-router-dom"

import './nav.css'

function Nav() {
  
  return(
    <Fragment>
      <nav className='site-nav nav'>
        <ul className='site-nav__list list-style-none'>
          <li>
            <NavLink to='/'>Каталог запчастей</NavLink>
          </li>
          <li>
            <NavLink to='/'>Каталог ТО</NavLink>
          </li>
          <li className='nav_item--active'>
            <NavLink to='/'>Шины</NavLink>
          </li>
          <li>
            <NavLink to='/'>Диски</NavLink>
          </li>
          <li>
            <NavLink to='/'>Аккумуляторы</NavLink>
          </li>
          <li>
            <NavLink to='/'>Автомасла</NavLink>
          </li>
          <li>
            <NavLink to='/'>Автолампы</NavLink>
          </li>
          <li>
            <NavLink to='/'>Аксессуары</NavLink>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}

export default Nav 