import styles from './Menu.module.scss';
import {useState} from "react";
import cn from "classnames";

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleShowMenu() {
    setShowMenu(!showMenu);
  }

  const menuButtonClassNames = cn(styles.menuButton, {
    [styles.active]: showMenu,
  })
  const sideMenuClassNames = cn(styles.sideMenu, {
    [styles.show]: showMenu,
  })


  return (
    <>
      <span className="d-none d-lg-block">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Outboard motor</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Inboard motor</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </span>
      <div className="d-lg-none">
        <button
          className={menuButtonClassNames}
          aria-label="Toggle menu"
          onClick={toggleShowMenu}
        />
        <div
          className={sideMenuClassNames}
          tabIndex="-1"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#">Outboard motor</a>
            </li>
            <li className="nav-item">
              <a href="#">Inboard motor</a>
            </li>
            <li className="nav-item">
              <a href="#">About</a>
            </li>
            <li className="nav-item">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
