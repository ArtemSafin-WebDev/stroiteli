import React from "react";
import styles from "./EventsCard.module.scss";

const EventsCard = ({ date, title, tickets, btnText, link, image }) => {
  return (
    <a href={link} className={styles.eventsCard}>
      <div className={styles.eventsCardBg}>
        <img src={image} alt="Image" className={styles.eventsCardBgImage} />
      </div>

      <div className={styles.eventsCardContent}>
        <div className={styles.eventsCardTitleBlock}>
          <div className={styles.eventsCardDate}>{date}</div>
          <h3 className={styles.eventsCardTitle}>{title}</h3>
          <div className={styles.eventsCardTickets}>
            <em>$</em>
            {tickets}
          </div>
        </div>
        <div className={styles.eventsCardBtn}>{btnText}</div>
      </div>
    </a>
  );
};

export default EventsCard;
