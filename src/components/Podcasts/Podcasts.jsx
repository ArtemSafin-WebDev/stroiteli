import React, { useState } from "react";
import styles from "./Podcasts.module.scss";
import { ReactComponent as SmallPlayBtn } from "../../icons/play-small.svg";
import { ReactComponent as LargePlayBtn } from "../../icons/play-large.svg";

const Podcasts = () => {
  const [currentPodcast, setCurrentPodcast] = useState({
    image: process.env.PUBLIC_URL + "/podcasts/podcast-bg.jpg",
    title: "Девелопер: консерватор или провокатор",
    link: '#',
    description:
      "Креатив и провокации в рекламе застройщиков | коммуникации и PR девелоперов",
  });

  const [otherPodcasts, setOtherPodcasts] = useState([
    {
      id: 1,
      type: "Подкаст",
      link: "#",
      description:
        "Устрой дестрой: кто выступает за отмену строительных правил и норм?",
    },
    {
      id: 2,
      type: "Подкаст",
      link: "#",
      description:
        "Устрой дестрой: кто выступает за отмену строительных правил и норм?",
    },
    {
      id: 3,
      type: "Подкаст",
      link: "#",
      description:
        "Устрой дестрой: кто выступает за отмену строительных правил и норм?",
    },
    {
      id: 4,
      type: "Подкаст",
      link: "#",
      description:
        "Устрой дестрой: кто выступает за отмену строительных правил и норм?",
    },
  ]);

  return (
    <div className={styles.podcasts}>
      <div className={styles.podcastsBg}>
        <img
          src={currentPodcast.image}
          alt=""
          className={styles.podcastsBgImage}
        />
      </div>
      <div className="container">
        <div className="inner-container">
          <div className={styles.podcastsRow}>
            <div className={styles.podcastsLeftCol}>
              <h2 className={styles.podcastsHeadingBlock}>Подкасты</h2>

              <a href={currentPodcast.link} className={styles.podcastsSelectedPodcast}>
                <div className={styles.podcastsSelectedPodcastLeftCol}>
                  <h4 className={styles.podcastsSelectedPodcastHeading}>
                    Девелопер: консерватор или провокатор
                  </h4>
                  <div className={styles.podcastsSelectedPodcastDescription}>
                    Креатив и провокации в рекламе застройщиков | коммуникации и
                    PR девелоперов
                  </div>
                </div>
                <div className={styles.podcastsSelectedPodcastRightCol}>
                  <div className={styles.podcastsSelectedPodcastPlayBtn}>
                    смотреть
                    <LargePlayBtn className={styles.podcastsSelectedPodcastPlayBtnIcon}/>
                  </div>
                </div>
              </a>
            </div>

            {otherPodcasts.length && (
              <div className={styles.podcastsRightCol}>
                <div className={styles.podcastsWatchAlso}>
                  <div className={styles.podcastsWatchAlsoTitleBlock}>
                    <h3 className={styles.podcastsWatchAlsoTitle}>
                      Смотрите также
                    </h3>
                    <a href="#" className={styles.podcastsWatchAlsoMoreLink}>
                      youtube →
                    </a>
                  </div>
                  <ul className={styles.podcastsWatchAlsoList}>
                    {otherPodcasts.map((otherPodcast) => (
                      <li className={styles.podcastsWatchAlsoListItem}>
                        <a
                          href={otherPodcast.link}
                          className={styles.podcastsWatchAlsoCard}
                        >
                          <div className={styles.podcastsWatchAlsoCardType}>
                            {otherPodcast.type}
                            <SmallPlayBtn
                              className={styles.podcastsWatchAlsoCardIcon}
                            />
                          </div>

                          <div
                            className={styles.podcastsWatchAlsoCardDescription}
                          >
                            {otherPodcast.description}
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcasts;
