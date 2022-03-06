import styles from './Menu.module.scss';
import {useState} from "react";
import cn from "classnames";
import {animated, useTrail, config} from "react-spring";


function SideMenuBackground({ onComplete }) {
  const trail = useTrail(3, {
    config: config.slow,
    scale: 1.7,
    translate: "-50%, 0%",
    from: {
      scale: 0,
      translate: "60%, 0%",
    },
    onRest: onComplete
  });

  return (
    <div className={styles.bg}>
      {trail.map((componentStyles, index) => (
        <animated.div
          key={index}
          className={styles.backgroundPart}
          style={componentStyles}
        />
      ))}
    </div>
  )
}

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuItems, setShowMenuItems] = useState(false);

  function toggleShowMenu() {
    setShowMenu(!showMenu);
    if (showMenu) setShowMenuItems(false);
  }

  function handleShowMenuItems() {
    setShowMenuItems(true)
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
          {showMenuItems && (
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
          )}

          {showMenu && <SideMenuBackground onComplete={handleShowMenuItems} />}
        </div>
      </div>
    </>
  )
}
