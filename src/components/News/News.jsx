import React from "react";
import Media from "../Media/Media";

import styles from "./News.module.scss";

import Publications from '../Publications/Publications';

const News = () => {
  return (
    <div className={styles.news}>
      <div className="container">
        <div className="inner-container">
          <div className={styles.newsGrid}>
            <Media />
            <Publications/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
