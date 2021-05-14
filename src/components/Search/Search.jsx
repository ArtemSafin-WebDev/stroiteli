import React from "react";
import { Link } from "react-router-dom";
import styles from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";

const Search = () => {
  return (
    <div className={styles.search}>
      <div className="container">
        <div className="inner-container">
          <div className={styles.searchRow}>
            <div className={styles.searchLinks}>
              <Link className={styles.searchLink} to="/">
                Статьи
              </Link>
              <Link className={styles.searchLink} to="/">
                Рейтинги
              </Link>
              <Link className={styles.searchLink} to="/">
                Аналитика
              </Link>
              <Link className={styles.searchLink} to="/">
                Мнения
              </Link>
            </div>
            <form className={styles.searchForm}>
              <div className={styles.searchInputWrapper}>
                <SearchIcon className={styles.searchIcon} />
                <input
                  type="text"
                  className={styles.searchInput}
                  placeholder="Поиск"
                />
              </div>
              <button type="submit" className={styles.searchSubmit}>
                Опубликовать материал
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
