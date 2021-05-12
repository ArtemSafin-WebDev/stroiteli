import React, { useState } from "react";
import styles from "./Publications.module.scss";

const Publications = () => {
  const [publications, setPublications] = useState([
    {
      id: 1,
      title:
        "Объем ввода жилья 2020 года превзошел итоговый показатель 2019 года",
      date: "30 марта 2021, 16:22",
      tags: ["#жилищное строительство", "#строительство"],
      image: process.env.PUBLIC_URL + "/publications/1.jpg",
    },
    {
      id: 2,
      title:
        "Стартовал третий поток бесплатного образовательного курса Архитекторы.рф",
      date: "30 марта 2021, 11:35",
      tags: ["#образование", "#архитектура"],
      image: process.env.PUBLIC_URL + "/publications/2.jpg",
    },
    {
      id: 3,
      title:
        "В Приволжском федеральном округе построят 47 объектов инфраструктуры по программе «Стимул»",
      date: "29 марта 2021, 16:15",
      tags: ["#нацпроекты", "#стимул"],
      image: process.env.PUBLIC_URL + "/publications/3.jpg",
    },
  ]);
  return (
    <div className={styles.publications}>
      <div className={styles.publicationsHeadingBlock}>
        <h3 className={styles.publicationsHeading}>Новости Минстроя</h3>
        <a href="#" className={styles.publicationsShowMore}>
          все →
        </a>
      </div>
      <div className={styles.publicationsCards}>
        {publications.map((card) => (
          <a href="#" className={styles.publicationsCard}>
           
            <div className={styles.publicationsCardImageContainer}>
                <img src={card.image} alt="" className={styles.publicationsCardImage} />
            </div>
            <h4 className={styles.publicationsCardTitle}>
                {card.title}
            </h4>
            <div className={styles.publicationsCardDate}>
                {card.date}
            </div>
            <div className={styles.publicationsCardTags}>
                {
                    card.tags.map(tag => <span className={styles.publicationsCardTag}>{tag}</span>)
                }
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Publications;
