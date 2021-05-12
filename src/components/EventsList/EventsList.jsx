import React, { useState } from "react";
import EventsCard from "../EventsCard/EventsCard";

import styles from "./EventsList.module.scss";

const EventsList = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      date: "5-7 февраля 2022",
      title: "Форум недвижимости Движение",
      tickets: "Билеты от 35 000 ₽",
      btnText: "Перейти на сайт",
      link: "#",
      image: process.env.PUBLIC_URL + "/events/1.jpg",
    },
    {
      id: 2,
      date: "22 сентября 2021",
      title: "Открытая конференция",
      tickets: "Билеты от 35 000 ₽",
      btnText: "Подробнее",
      link: "#",
      image: process.env.PUBLIC_URL + "/events/2.jpg",
    },
    {
      id: 3,
      date: "14 октября 2021",
      title: "Урбан-тур Вдохновение",
      tickets: "Билеты от 35 000 ₽",
      btnText: "Подробнее",
      link: "#",
      image: process.env.PUBLIC_URL + "/events/3.jpg",
    },
    {
      id: 4,
      date: "5 декабря 2021",
      title: "Встречи клуба",
      tickets: "Билеты от 35 000 ₽",
      btnText: "Подробнее",
      link: "#",
      image: process.env.PUBLIC_URL + "/events/4.jpg",
    },
  ]);

  if (!events.length) return null;

  return (
    <div className={styles.eventsList}>
      <div className="container">
        <div className="inner-container">
          <div className={styles.eventsListTopRow}>
            <h3 className={styles.eventsListHeading}>
              Мероприятия для строителей
            </h3>
            <a href="#" className={styles.eventsListLink}>
              смотреть все →
            </a>
          </div>
          <div className={styles.eventsListGrid}>
            {events.map((event) => (
              <EventsCard
                key={event.id}
                date={event.date}
                title={event.title}
                tickets={event.tickets}
                btnText={event.btnText}
                link={event.link}
                image={event.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsList;
