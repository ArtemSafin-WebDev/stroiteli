import React, { useState } from "react";

import styles from "./Discussions.module.scss";
import mediaStyles from "../Media/Media.module.scss";
import { ReactComponent as FireIcon } from "../../icons/fire.svg";

import { ReactComponent as ViewsIcon } from "../../icons/eye.svg";
import { ReactComponent as CommentsIcon } from "../../icons/bubble.svg";
import { ReactComponent as BookmarkIcon } from "../../icons/bookmark.svg";
import { Link } from "react-router-dom";



const Discussions = () => {
  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      title:
        "Мы хотим создать инфраструктуру для обучения, поиска подрядчиков, формирования комьюнити",
    },
    {
      id: 2,
      title:
        "Мы хотим создать инфраструктуру для обучения, поиска подрядчиков, формирования комьюнити",
    },
    {
      id: 3,
      title:
        "Мы хотим создать инфраструктуру для обучения, поиска подрядчиков, формирования комьюнити",
    },
    {
      id: 4,
      title:
        "Мы хотим создать инфраструктуру для обучения, поиска подрядчиков, формирования комьюнити",
    },
    {
      id: 5,
      title:
        "Мы хотим создать инфраструктуру для обучения, поиска подрядчиков, формирования комьюнити",
    }
  ]);
  return (
    <div className={styles.discussions}>
      <h3 className={styles.discussionsHedaing}>
        Сейчас обсуждают
        <FireIcon className={styles.discussionsIcon} />
      </h3>
      <div className={styles.discussionsCards}>
        {discussions.map((item) => (
          <div className={styles.discussionsCard} key={item.id}>
            <Link to="/" className={styles.discussionsCardTitle}>{item.title}</Link>
            <div className={mediaStyles.mediaCardInfo}>
              <div className={mediaStyles.mediaCardDate}>16.03</div>
              <div className={mediaStyles.mediaCardViews}>
                <ViewsIcon className={mediaStyles.mediaCardViewsIcon} />
                216
              </div>
              <div className={mediaStyles.mediaCardCommentsGreen}>
                <CommentsIcon className={mediaStyles.mediaCardCommentsIcon} />
                221
              </div>
              <button className={mediaStyles.mediaCardBookmark}>
                <BookmarkIcon className={mediaStyles.mediaCardBookmarkIcon} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discussions;
