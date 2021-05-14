import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../img/logo.svg";
import dvsnLogo from "../../img/DVSN.svg";
import Community from "../Community/Community";

const Header = () => {
  const [menuItems, setMenuItems] = useState([
    {
      title: "База знаний",
      href: "/",
    },
    {
      title: "Университет",
      href: "/",
    },
    {
      title: "Медиа",
      href: "/media",
    },
    {
      title: "Мероприятия",
      href: "/",
    },
    {
      title: "Аналитика",
      href: "/",
    },
    {
      title: "Центр консалтинга",
      href: "/",
    },
    {
      title: "Омбудсмен",
      href: "/",
    },
  ]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerRow}>
          <Link to="/" className={styles.headerLogo}>
            <img src={logo} alt="Логотип" className={styles.headerLogoImage} />
            <div className={styles.headerLogoText}>
              онлайн-платформа <br /> для застройщиков России
            </div>
          </Link>

          <div className={styles.headerMenu}>
            <nav className={styles.headerNav}>
              {menuItems.map((item) => (
                <Link
                  to={item.href}
                  key={`${item.title}_${item.href}`}
                  className={styles.headerNavLink}
                >
                  {item.title}
                </Link>
              ))}
              <a href="#" className={styles.headerDvsnLink}>
                <img
                  src={dvsnLogo}
                  alt="DVSN"
                  className={styles.headerDvsnLinkImage}
                />
              </a>
            </nav>
          </div>

          <Community />

          <div className={styles.headerControls}>
            <Link to="/login" className={styles.headerLoginLink}>Войти</Link>

            <button type="button" className={styles.headerBurgerBtn}>
                <span></span>
                <span></span>
                <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
