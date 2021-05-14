import React from "react";
import styles from "./LoadMore.module.scss";

const LoadMore = () => {
  return (
    <div className={styles.loadMore}>
      <div className="container">
        <div className="inner-container">
          <div className={styles.loadMoreWrapper}>
            <button className={styles.loadMoreBtn}>Смотреть еще</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadMore;
