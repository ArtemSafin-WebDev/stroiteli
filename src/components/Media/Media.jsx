import React, { useState } from "react";
import styles from "./Media.module.scss";
import { ReactComponent as ViewsIcon } from "../../icons/eye.svg";
import { ReactComponent as CommentsIcon } from "../../icons/bubble.svg";
import { ReactComponent as BookmarkIcon } from "../../icons/bookmark.svg";

const Media = (props) => {
  const [simpleCards, setSimpleCards] = useState([
    {
      id: 1,
      title:
        "Максим Егоров проверил в Саратове ход реализации федерального проекта «Формирование комфортной городской среды»",
      date: "16.03",
      views: 216,
      comments: 221,
    },
    {
      id: 2,
      title:
        "Поздравление главы Минстроя России Ирека Файзуллина с Днем работников жилищно-коммунального хозяйства",
      date: "16.03",
      views: 216,
      comments: 141,
    },
    {
      id: 3,
      title:
        "Общий объем инвестиций по заключенным концессионным соглашениям составляет 504 миллиарда рублей",
      date: "16.03",
      views: 216,
      comments: 141,
    },
    {
      id: 4,
      title:
        "Открытый конкурс на разработку мастер-плана стартовал в одной из 27 приоритетных агломераций РФ",
      date: "16.03",
      views: 216,
      comments: 141,
    },
    {
      id: 5,
      title:
        "За два месяца 2021 года выдано разрешений на строительство более 3,5 миллионов квадратных метров жилья",
      date: "16.03",
      views: 216,
      comments: 141,
    },
  ]);

  const [featuredCard, setFeaturedCard] = useState({
    title:
      "Мы хотим создать инфраструктуру для обучения, поиска подрядчиков, формирования комьюнити",
    image: process.env.PUBLIC_URL + "/media/featured-card-small.jpg",
    views: 216,
    comments: 21,
    date: "16.03",
  });
  const [featuredCard2, setFeaturedCard2] = useState({
    title:
      "Мы хотим создать инфраструктуру для обучения, поиска подрядчиков, формирования комьюнити",
    image: process.env.PUBLIC_URL + "/media/featured-card-small-2.jpg",
    views: 216,
    comments: 21,
    date: "16.03",
  });

  const [cardsWithImages, setCardsWithImages] = useState([
    {
      id: 1,
      title:
        "Более 32 тысяч волонтеров зарегистрировались для поддержки общероссийского голосования за проекты благоустройства",
      views: 216,
      comments: 21,
      date: "16.03",
      image: process.env.PUBLIC_URL + "/media/1.jpg",
    },
    {
      id: 2,
      title:
        "Светлана Иванова назначена статс-секретарем – замминистра строительства и ЖКХ РФ",
      views: 216,
      comments: 21,
      date: "16.03",
      image: process.env.PUBLIC_URL + "/media/2.jpg",
    },
    {
      id: 3,
      title:
        "50 участников молодежного интенсива по цифровизации разработают новые умные решения для российских городов",
      views: 216,
      comments: 21,
      date: "16.03",
      image: process.env.PUBLIC_URL + "/media/3.jpg",
    },
  ]);
  return (
    <div className={styles.media}>
      {!props.noHeading && (
        <div className={styles.mediaHeadingBlock}>
          <h2 className={styles.mediaMainHeading}>Медиа</h2>
          <a href="#" className={styles.mediaShowMore}>
            смотреть все →
          </a>
        </div>
      )}

      <div className={styles.mediaRow}>
        <div className={styles.mediaLeftCol}>
          <div className={styles.mediaSmallFeaturedCard}>
            <a href="#" className={styles.mediaSmallFeaturedCardBg}>
              <img
                src={featuredCard.image}
                className={styles.mediaSmallFeaturedCardBgImage}
                alt=""
              />
            </a>

            <a href="#" className={styles.mediaSmallFeaturedCardContent}>
              <h4 className={styles.mediaSmallFeaturedCardTitle}>
                {featuredCard.title}
              </h4>
            </a>

            <div className={styles.mediaCardInfo}>
              <div className={styles.mediaCardDateLight}>
                {featuredCard.date}
              </div>
              <div className={styles.mediaCardViewsWhite}>
                <ViewsIcon className={styles.mediaCardViewsIcon} />
                {featuredCard.views}
              </div>
              <div className={styles.mediaCardCommentsWhite}>
                <CommentsIcon className={styles.mediaCardCommentsIcon} />
                {featuredCard.comments}
              </div>

              <button className={styles.mediaCardBookmarkWhite}>
                <BookmarkIcon className={styles.mediaCardBookmarkIcon} />
              </button>
            </div>
          </div>
          {simpleCards.map((card) => (
            <div className={styles.mediaSimpleCard} key={card.id}>
              <a href="#" className={styles.mediaSimpleCardContent}>
                <h4 className={styles.mediaSimpleCardTitle}>{card.title}</h4>
              </a>

              <div className={styles.mediaCardInfo}>
                <div className={styles.mediaCardDate}>{card.date}</div>
                <div className={styles.mediaCardViews}>
                  <ViewsIcon className={styles.mediaCardViewsIcon} />
                  {card.views}
                </div>
                <div className={styles.mediaCardCommentsGreen}>
                  <CommentsIcon className={styles.mediaCardCommentsIcon} />
                  {card.comments}
                </div>

                <button className={styles.mediaCardBookmark}>
                  <BookmarkIcon className={styles.mediaCardBookmarkIcon} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.mediaRightCol}>
          <div className={styles.mediaSmallFeaturedCardWide}>
            <a href="#" className={styles.mediaSmallFeaturedCardBg}>
              <img
                src={featuredCard2.image}
                className={styles.mediaSmallFeaturedCardBgImage}
                alt=""
              />
            </a>

            <a href="#" className={styles.mediaSmallFeaturedCardContent}>
              <h4 className={styles.mediaSmallFeaturedCardTitle}>
                {featuredCard2.title}
              </h4>
            </a>

            <div className={styles.mediaCardInfo}>
              <div className={styles.mediaCardDateLight}>
                {featuredCard2.date}
              </div>
              <div className={styles.mediaCardViewsWhite}>
                <ViewsIcon className={styles.mediaCardViewsIcon} />
                {featuredCard.views}
              </div>
              <div className={styles.mediaCardCommentsWhite}>
                <CommentsIcon className={styles.mediaCardCommentsIcon} />
                {featuredCard2.comments}
              </div>

              <button className={styles.mediaCardBookmarkWhite}>
                <BookmarkIcon className={styles.mediaCardBookmarkIcon} />
              </button>
            </div>
          </div>
          <div className={styles.mediaCardsWithImages}>
            {cardsWithImages.map((card) => (
              <div className={styles.mediaCardWithImage}>
                <a
                  href="#"
                  className={styles.mediaCardWithImageLinkWrapper}
                ></a>
                <div className={styles.mediaCardWithImageContainer}>
                  <img
                    src={card.image}
                    alt=""
                    className={styles.mediaCardWithImagePhoto}
                  />
                </div>
                <div className={styles.mediaCardWithImageContent}>
                  <div className={styles.mediaCardWithImageHeading}>
                    {card.title}
                  </div>

                  <div className={styles.mediaCardInfo}>
                    <div className={styles.mediaCardDate}>{card.date}</div>
                    <div className={styles.mediaCardViews}>
                      <ViewsIcon className={styles.mediaCardViewsIcon} />
                      {card.views}
                    </div>
                    <div className={styles.mediaCardComments}>
                      <CommentsIcon className={styles.mediaCardCommentsIcon} />
                      {card.comments}
                    </div>

                    <button className={styles.mediaCardBookmark}>
                      <BookmarkIcon className={styles.mediaCardBookmarkIcon} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
