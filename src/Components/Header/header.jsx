import { Fragment, useRef } from "react"
import { Link } from "react-router-dom"

import './header.css'
import Logo from "../../img/logo.svg"
import ProfileLogo from "../../img/profile-logo.svg"
import LikedThings from "../../img/liked-things-logo.svg"
import BookedThings from "../../img/booked-things-logo.svg"


import Nav from "../Nav/nav"


function Header() {
  const userModalOpenerBtn = useRef()
  

  function openUserModal(evt) {
    console.log(evt.target)

    userModalOpenerBtn.current.classList.toggle('modal-activator')
  }

  
  return(
    <Fragment>
      <header>
        <ul className='list-style-none header-list'>
          <li>
            <Link to='/shops'>Магазины</Link>
          </li>
          <li>
            <Link to='/promotions'>Акции</Link>
          </li>
          <li>
            <Link to='/shipping'>Доставка и оплата</Link>
          </li>
        </ul>

        <Link to='/'>
          <img src={ Logo } alt="site-logo" width='101' height='50' />
        </Link>

        <a className='location-link' target='_blank' href="https://www.google.com/maps/place/Najot+Ta'lim/@41.3468947,69.213536,17z/data=!3m1!4b1!4m5!3m4!1s0x38ae8d54a1c04b77:0x76504a72d3e75a03!8m2!3d41.3468947!4d69.2157247">Санкт-Петербург, ул <br/> Большая Конюшенная, д 19</a>

        <ul className='user-panel list-style-none'>
          <li>
            <button ref={ userModalOpenerBtn } onClick={ openUserModal } className='user-panel__btn liked-btn'>
              
              <img src={ LikedThings } width='25' height='22' alt=""/>
              <div id='user-modal' className="user-modal user-modal-active">
                <ul className='list-style-none'>
                  <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, voluptatibus.
                  </li>
                </ul>
              </div>
            </button>
          </li>
          <li>
            <button className='user-panel__btn profile-btn'>
              <img src={ ProfileLogo } width='25' height='22' alt=""/>
            </button>
          </li>
          <li>
            <button className='user-panel__btn booked-things'>
              <img src={ BookedThings } alt="" width='40' height='32' />
            </button>
          </li>
        </ul>

      </header>

      <Nav />
      
    </Fragment>
  )
}

export default Header