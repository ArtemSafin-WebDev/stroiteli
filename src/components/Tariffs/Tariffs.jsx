import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Tariffs.module.scss";

const Tariffs = () => {
  const [tariffs, setTariffs] = useState([
    {
      id: 1,
      title: "Годовая",
      text: "Стоимость подписки в год на компанию из 10 человек",
      price: "300 000 ₽",
      imgSrc: process.env.PUBLIC_URL + "/tariffs/1.png",
    },
    {
      id: 2,
      title: "Месячная",
      text: "Стоимость подписки в месяц на компанию из 10 человек",
      price: "300 000 ₽",
      imgSrc: process.env.PUBLIC_URL + "/tariffs/2.png",
    },
    {
      id: 3,
      title: "Персональная",
      text: "Стоимость подписки на человека в год",
      price: "30 000 ₽",
      imgSrc: process.env.PUBLIC_URL + "/tariffs/3.png",
    },
    {
      id: 4,
      title: "Разовая",
      text: "Стоимость подписки на человека в месяц",
      price: "2 500 ₽",
      imgSrc: process.env.PUBLIC_URL + "/tariffs/2.png",
    },
  ]);
  return (
    <div className={styles.tariffs}>
      <div className="container">
        <div className="inner-container">
          <h2 className={styles.tariffsHeading}>
            Тарифы для подписчиков платформы
          </h2>

          <div className={styles.tariffsList}>
            {tariffs.map((item) => (
              <Link className={styles.tariffsCard} key={item.id}>
                <img src={item.imgSrc} alt="" className={styles.tariffsIcon} />
                <h4 className={styles.tariffsCardTitle}>{item.title}</h4>
                <div className={styles.tariffsCardText}>{item.text}</div>
                <div className={styles.tariffsCardPrice}>{item.price}</div>
                <div className={styles.tariffsCardBtn}>Подписаться</div>
              </Link>
            ))}
          </div>
          <div className={styles.tariffsTable}>
            <table>
              <tbody>
                <tr>
                  <th>Количество пользователей платформы</th>
                  <td>до 10 человек</td>
                </tr>
                <tr>
                  <th>Форум недвижимости Движение</th>
                  <td>Скидка 50%</td>
                </tr>
                <tr>
                  <th>Урбан-тур Вдохновение</th>
                  <td>
                    <b>2 места</b> на любой тур по России и в страны СНГ в
                    течение года
                    <br />
                    <b>скидка 50%</b> на любой тур в течение года сверх квоты
                  </td>
                </tr>
                <tr>
                  <th>Мастермайнде</th>
                  <td>
                    Доступ на любые мастермайнды в течение года. Количество мест
                    ограничено, необходимо бронировать участие вовремя.
                  </td>
                </tr>
                <tr>
                  <th>Неформальная встреча (только для топ-менеджеров)</th>
                  <td>Скидка 50%</td>
                </tr>
                <tr>
                  <th>Сентябрьская конференция</th>
                  <td>Любое количество сотрудников от компании</td>
                </tr>
                <tr>
                  <th>Доступ к онлайн-семинарам и интенсивам</th>
                  <td>Безлимитный</td>
                </tr>
                <tr>
                  <th>Доступ к базе знаний</th>
                  <td>Безлимитный</td>
                </tr>
                <tr>
                  <th>Публикации в медиа</th>
                  <td>2 публикации новостей компании в год</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tariffs;
