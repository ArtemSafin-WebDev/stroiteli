import React from "react";
import styles from "./InterviewCard.module.scss";
import { ReactComponent as ViewsIcon } from "../../icons/eye.svg";
import { ReactComponent as CommentsIcon } from "../../icons/bubble.svg";
import { ReactComponent as BookmarkIcon } from "../../icons/bookmark.svg";

const InterviewCard = ({ photo, type, title, date, views, comments, link }) => {
  return (
    <div className={styles.interviewCard}>
      <a href="#" className={styles.interviewCardMainContent}>
        <div className={styles.interviewCardPhotoContainer}>
          <img src={photo} alt="" className={styles.interviewCardPhoto} />
        </div>
        <div className={styles.interviewCardType}>{type}</div>
        <h4 className={styles.interviewCardTitle}>{title}</h4>
      </a>
      <div className={styles.interviewCardInfo}>
        <div className={styles.interviewCardDate}>{date}</div>
        <div className={styles.interviewCardViews}>
          <ViewsIcon className={styles.interviewCardViewsIcon} />
          {views}
        </div>
        <div className={styles.interviewCardComments}>
          <CommentsIcon className={styles.interviewCardCommentsIcon} />
          {comments}
        </div>

        <button className={styles.interviewCardBookmark}>
          <BookmarkIcon className={styles.interviewCardBookmarkIcon} />
        </button>
      </div>
    </div>
  );
};

export default InterviewCard;
