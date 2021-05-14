import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Account.module.scss";
import { ReactComponent as Bell } from "../../icons/bell.svg";
import { ReactComponent as Message } from "../../icons/message.svg";

const Account = () => {
  const [community, setCommunity] = useState([
    {
      id: 1,
      imgSrc: process.env.PUBLIC_URL + "/communityAccount/1.jpg",
      name: "Александр Костенюк",
    },
    {
      id: 2,
      imgSrc: process.env.PUBLIC_URL + "/communityAccount/2.jpg",
      name: "Kristin Watson",
    },
    {
      id: 3,
      imgSrc: process.env.PUBLIC_URL + "/communityAccount/3.jpg",
      name: "Dianne Russell",
    },
    {
      id: 4,
      imgSrc: process.env.PUBLIC_URL + "/communityAccount/4.jpg",
      name: "Arlene McCoy",
    },
    {
      id: 5,
      imgSrc: process.env.PUBLIC_URL + "/communityAccount/5.jpg",
      name: "Darlene Robertson",
    },
    {
      id: 6,
      imgSrc: process.env.PUBLIC_URL + "/communityAccount/6.jpg",
      name: "Bessie Cooper",
    },
    {
      id: 7,
      imgSrc: process.env.PUBLIC_URL + "/communityAccount/7.jpg",
      name: "Esther Howard",
    },
  ]);

  return (
    <div className={styles.account}>
      <div className="container">
        <div className="inner-container">
          <div className={styles.accountContent}>
            <div className={styles.accountRow}>
              <div className={styles.accountCol}>
                <div className={styles.accountNav}>
                  <div className={styles.accountNavLinks}>
                    <Link
                      className={`${styles.accountNavLink} ${styles.accountNavLinkActive}`}
                      to="/"
                    >
                      Профиль
                    </Link>
                    <Link className={styles.accountNavLink} to="/">
                      Уведомления
                      <span className={styles.accountNavCount}>2</span>
                    </Link>
                    <Link className={styles.accountNavLink} to="/">
                      Комьюнити
                    </Link>
                    <Link className={styles.accountNavLink} to="/">
                      Мероприятия
                    </Link>
                    <Link className={styles.accountNavLink} to="/">
                      Курсы
                    </Link>
                    <Link className={styles.accountNavLink} to="/">
                      Публикации
                    </Link>
                  </div>
                  <div className={styles.accountNavLinks}>
                    <Link className={styles.accountNavLinkGreen} to="/">
                      Изменить данные
                    </Link>
                    <Link className={styles.accountNavLink} to="/">
                      Выйти
                    </Link>
                  </div>
                </div>
                <div className={styles.accountSubscription}>
                  Подписка действительна до:
                  <br />
                  <b>21.05.2022</b>
                </div>
              </div>

              <div className={styles.accountCol}>
                <div className={styles.accountUserInfo}>
                  <div className={styles.accountUserInfoPictureContainer}>
                    <img
                      src={process.env.PUBLIC_URL + "/account/user-info.jpg"}
                      alt=""
                      className={styles.accountUserInfoPicture}
                    />
                  </div>
                  <div className={styles.accountUserInfoContent}>
                    <h4 className={styles.accountUserInfoHeading}>
                      Александр Старовойтов
                    </h4>
                    <div className={styles.accountUserInfoRole}>Менеджер</div>

                    <div className={styles.accountUserInfoData}>
                      Москва
                      <br />
                      +79505035550
                      <br />
                      as@pik.ru
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accountCol}>
                <div className={styles.accountInfoBlock}>
                  <div className={styles.accountInfoBlockTopRow}>
                    <div className={styles.accountInfoBlockTopRowTitle}>
                      Опции
                    </div>
                    <div className={styles.accountInfoBlockNotifications}>
                      <Bell className={styles.accountInfoBlockIcon} />
                    </div>
                  </div>
                  <div className={styles.accountOptions}>
                    <div className={styles.accountOption}>
                      <div className={styles.accountOptionNumbers}>50%</div>
                      <div className={styles.accountOptionText}>
                        скидка на участие в “Движении”
                      </div>
                    </div>
                    <div className={styles.accountOption}>
                      <div className={styles.accountOptionNumbers}>2</div>
                      <div className={styles.accountOptionText}>
                        публикации в медиа
                      </div>
                      <Link to="/" className={styles.accountOptionAction}>
                        предложить новость
                      </Link>
                    </div>
                    <div className={styles.accountOptionGrey}>
                      <div className={styles.accountOptionNumbers}>2 места</div>
                      <div className={styles.accountOptionText}>
                        в урбан-туре “Вдохновение”
                      </div>
                      <div className={styles.accountOptionAction}>
                        места закончились
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.accountInfoBlock}>
                  <div className={styles.accountInfoBlockTopRow}>
                    <div className={styles.accountInfoBlockTopRowTitle}>
                      Мероприятия
                    </div>
                    <div className={styles.accountInfoBlockNotificationsGreen}>
                      2
                      <Bell className={styles.accountInfoBlockIcon} />
                    </div>
                  </div>
                  <div className={styles.accountEvents}>
                    <Link to="/" className={styles.accountEvent}>
                      <div className={styles.accountEventDate}>
                        7-8 июня 2021
                      </div>

                      <div className={styles.accountEventHeading}>
                        Форум недвижимости Движение
                      </div>
                    </Link>
                    <Link to="/" className={styles.accountEvent}>
                      <div className={styles.accountEventDate}>
                        29-29 сентября 2021
                      </div>

                      <div className={styles.accountEventHeading}>
                        Урбан-тур Вдохновение
                      </div>
                    </Link>
                  </div>
                </div>

                <div className={styles.accountInfoBlock}>
                  <div className={styles.accountInfoBlockTopRow}>
                    <div className={styles.accountInfoBlockTopRowTitle}>
                      Курсы
                    </div>
                    <div className={styles.accountInfoBlockNotifications}>
                      <Bell className={styles.accountInfoBlockIcon} />
                    </div>
                  </div>

                  <div className={styles.accountEvents}>
                    <Link to="/" className={styles.accountEvent}>
                      <div className={styles.accountEventDate}>
                        7-8 июня 2021
                        <span className={styles.accountEventBlock}>
                          • Блок №2
                        </span>
                      </div>

                      <div className={styles.accountEventHeading}>
                        Диджитал-интенсив для девелопера
                      </div>
                    </Link>
                  </div>
                </div>

                <div className={styles.accountInfoBlock}>
                  <div className={styles.accountInfoBlockTopRow}>
                    <div className={styles.accountInfoBlockTopRowTitle}>
                      Коммьюнити
                    </div>
                    <div className={styles.accountInfoBlockNotifications}>
                      <Message className={styles.accountInfoBlockIcon} />
                    </div>
                  </div>
                  <div className={styles.accountCommunity}>
                    {community.map((item) => (
                      <Link to="/"
                        className={styles.accountCommunityPerson}
                        key={item.id}
                      >
                        <div
                          className={
                            styles.accountCommunityPersonImageContainer
                          }
                        >
                          <img
                            src={item.imgSrc}
                            alt=""
                            className={styles.accountCommunityPersonImage}
                          />
                        </div>
                        <div className={styles.accountCommunityPersonTitle}>
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
