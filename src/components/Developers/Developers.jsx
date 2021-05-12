import React, { useState } from "react";
import styles from "./Developers.module.scss";

const Developers = () => {
  const developers = [
    {
      href: "#",
      imgSrc: process.env.PUBLIC_URL + "/developers/1.svg",
    },
    {
      href: "#",
      imgSrc: process.env.PUBLIC_URL + "/developers/2.png",
    },
    {
      href: "#",
      imgSrc: process.env.PUBLIC_URL + "/developers/3.svg",
    },
    {
      href: "#",
      imgSrc: process.env.PUBLIC_URL + "/developers/4.svg",
    },
    {
      href: "#",
      imgSrc: process.env.PUBLIC_URL + "/developers/6.png",
    },
  ];

  if (!developers.length) return null;

  return (
    <div className={styles.developers}>
      <div className="container">
        <div className="inner-container">
          <div className={styles.developersContent}>
            <h2 className={styles.developersHeading}>
              Комьюнити строителей России
            </h2>
            <ul className={styles.developersList}>
              {developers.map((developer) => (
                <li className={styles.developersListItem}>
                  <a href={developer.href} className={styles.developersCard}>
                    <img
                      src={developer.imgSrc}
                      alt=""
                      className={styles.developersCardImage}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
