import React from "react";
import styles from "./Footer.module.scss";
import { ReactComponent as InstagramLogo } from "../../icons/instagram.svg";
import { ReactComponent as VkLogo } from "../../icons/vk.svg";
import { ReactComponent as TwitterLogo } from "../../icons/twitter.svg";
import { Link } from "react-router-dom";
import dvsnLogo from "../../img/DVSN.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="inner-container">
          <div className={styles.footerTopRow}>
            <div className={styles.footerContacts}>
              <div className={styles.footerContactsLinks}>
                <a
                  href="tel:+7800900999100"
                  className={styles.footerContactsLink}
                >
                  8 800 900 999 100
                </a>
                <a
                  href="mailto:hello@строители.рф"
                  className={styles.footerContactsLink}
                >
                  hello@строители.рф
                </a>
              </div>
              <div className={styles.footerSocial}>
                <a href="#" className={styles.footerSocialLink}>
                  <InstagramLogo />
                </a>
                <a href="#" className={styles.footerSocialLink}>
                  <VkLogo />
                </a>
                <a href="#" className={styles.footerSocialLink}>
                  <TwitterLogo />
                </a>
              </div>
            </div>
            <div className={styles.footerMenu}>
              <div className={styles.footerMenuCol}>
                <ul className={styles.footerMenuList}>
                  <li className={styles.footerMenuListItem}>
                    <Link to="/" className={styles.footerMenuLink}>
                      База знаний
                    </Link>
                  </li>
                  <li className={styles.footerMenuListItem}>
                    <Link to="/" className={styles.footerMenuLink}>
                      Университет
                    </Link>
                  </li>
                  <li className={styles.footerMenuListItem}>
                    <Link to="/" className={styles.footerMenuLink}>
                      Медиа
                    </Link>
                  </li>
                  <li className={styles.footerMenuListItem}>
                    <Link to="/" className={styles.footerMenuLink}>
                      Мероприятия
                    </Link>
                  </li>
                  <li className={styles.footerMenuListItem}>
                    <Link to="/" className={styles.footerMenuLink}>
                      Аналитика
                    </Link>
                  </li>
                  <li className={styles.footerMenuListItem}>
                    <Link to="/" className={styles.footerMenuLink}>
                      Центр консалтинга
                    </Link>
                  </li>
                  <li className={styles.footerMenuListItem}>
                    <Link to="/" className={styles.footerMenuLink}>
                      Омбудсмен
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.footerMenuCol}>
                <ul className={styles.footerMenuList}>
                  <li className={styles.footerMenuListItem}>
                    <Link to="/" className={styles.footerMenuLink}>
                      О платформе
                    </Link>
                  </li>
                  <li className={styles.footerMenuListItem}>
                    <Link to="/" className={styles.footerMenuLink}>
                      Стоимость
                    </Link>
                  </li>
                  <li className={styles.footerMenuListItem}>
                    <Link to="/" className={styles.footerMenuLink}>
                      FAQ
                    </Link>
                  </li>
                  <li className={styles.footerMenuListItem}>
                    <Link to="/" className={styles.footerMenuLink}>
                      Контакты
                    </Link>
                  </li>
                </ul>

                <a href="#" className={styles.footerMenuDvsn}>
                  <img
                    src={dvsnLogo}
                    alt="DVSN"
                    className={styles.footerMenuDvsnImage}
                  />
                </a>
              </div>
              <div className={styles.footerMenuCol}>
                <ul className={styles.footerMenuList}>
                  <li className={styles.footerMenuListItem}>
                    <Link to="/" className={styles.footerMenuLink}>
                      Личный кабинет
                    </Link>
                  </li>
                  <li className={styles.footerMenuListItem}>
                    <Link to="/" className={styles.footerMenuLink}>
                      Регистрация
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <form action="/" method="POST" className={styles.footerForm}>
              <div className={styles.footerFormText}>
                <p>
                  Подпишитесь на наши последние новости и будьте в курсе важных
                  обновлений
                </p>
              </div>
              <div className={styles.footerInputsWrapper}>
                <input
                  type="email"
                  name="email"
                  className={styles.footerFormInput}
                  placeholder="Введите E-mail"
                />
                <button type="submit" className={styles.footerFormSubmit}>
                  Подписаться
                </button>
              </div>
              <div className={styles.footerFormPolicy}>
                Нажимая на кнопку, я принимаю условия пользовательского
                соглашения и политики конфиденциальности
              </div>
            </form>
          </div>
          <div className={styles.footerBottomRow}>
            <div className={styles.footerCopyright}>© 2021, Строители.рф</div>
            <a href="#" className={styles.footerPolicy}>
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
