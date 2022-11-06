import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {BsInfoCircleFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button trigger-button-1">
            <GiHamburgerMenu className="burger-menu" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="pop-up-container">
            <button
              type="button"
              className="trigger-button close-btn"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
            <ul className="icons-navigation-container">
              <Link to="/" className="nav-link">
                <li className="navigation-item" onClick={() => close()}>
                  <AiFillHome className="home-component" />
                  <p className="navigation-item-name">Home</p>
                </li>
              </Link>
              <Link to="/about" className="nav-link">
                <li className="navigation-item" onClick={() => close()}>
                  <BsInfoCircleFill className="home-component" />
                  <p className="navigation-item-name">About</p>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default Header
