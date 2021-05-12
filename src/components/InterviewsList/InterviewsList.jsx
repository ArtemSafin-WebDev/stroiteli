import React, { useState } from "react";
import InterviewCard from "../InterviewCard/InterviewCard";

import styles from "./InterviewsList.module.scss";

const InterviewsList = () => {
  const [interviews, setInterviews] = useState([
    {
      id: 1,
      title:
        "Мы хотим создать инфраструктуру для обучения, поиска подрядчиков, формирования комьюнити",
      type: "Интервью РБК",
      photo: process.env.PUBLIC_URL + "/interviews/1.jpg",
      date: "16.03",
      views: 216,
      comments: 21,
      link: '#'
    },
    {
      id: 2,
      title:
        "Мы хотим создать инфраструктуру для обучения, поиска подрядчиков, формирования комьюнити",
      type: "Интервью РБК",
      photo: process.env.PUBLIC_URL + "/interviews/2.jpg",
      date: "16.03",
      views: 216,
      comments: 21,
      link: '#'
    },
    {
      id: 3,
      title:
        "Мы хотим создать инфраструктуру для обучения, поиска подрядчиков, формирования комьюнити",
      type: "Интервью РБК",
      photo: process.env.PUBLIC_URL + "/interviews/3.jpg",
      date: "16.03",
      views: 216,
      comments: 21,
      link: '#'
    },
    {
      id: 4,
      title:
        "Мы хотим создать инфраструктуру для обучения, поиска подрядчиков, формирования комьюнити",
      type: "Интервью РБК",
      photo: process.env.PUBLIC_URL + "/interviews/4.jpg",
      date: "16.03",
      views: 216,
      comments: 21,
      link: '#'
    },
  ]);
  return (
    <div className={styles.interviewsList}>
      <div className="container">
        <div className="inner-container">
          <div className={styles.interviewsListGrid}>
            {interviews.map((interview) => (
              <InterviewCard key={interview.id} {...interview} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewsList;
