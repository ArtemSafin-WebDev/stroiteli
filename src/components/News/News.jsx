import React from "react";


import styles from "./News.module.scss";



const News = (props) => {
  return (
    <div className={styles.news}>
      <div className="container">
        <div className="inner-container">
          <div className={styles.newsGrid}>
            
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
