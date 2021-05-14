import React, { useState } from "react";
import styles from "./Advantages.module.scss";
import { ReactComponent as AdvantageIcon } from "../../icons/advantage.svg";

const Advantages = () => {
  const [advantages, setAdvantages] = useState([
    {
      id: 1,
      title: "Доступ к базе знаний",
      text: "Здесь вы найдете шаблон брендбука, стандарты строительства, книгу продукта, чек-лист аудита системы маркетинга и продаж и другие инструменты, которые были опробованы и стандартизированы у многих девелоперских компаний. Среди них Ленстройтрест, А101, BI (Казахстан) и др. База наработок обновляется каждый месяц",
      date: "Дата следующего обновления: 1.10.2021",
    },
    {
      id: 2,
      title: "Скидки и бесплатное участие в мероприятиях",
      text: "Ваша подписка полностью окупается за счет специальных условий. Это значительные скидки на форум недвижимости Движение, а также квоты на бесплатное посещение урбан-туров, мастермайндов и неформальных встреч клуба, организацию туров под ключ для вашей компании и пр.",
    },
    {
      id: 3,
      title: "Доступ к аналитике, которой нет в открытых источниках",
      text: "В коллаборации с аналитическим центром ЦИАН мы публикуем данные о рынке новостроек. Вы сможете получать информацию о спросе и предложении, выявлять перспективные регионы для выхода на рынок, анализировать земельный банк.",
      date: "Дата следующего обновления: 1.10.2021",
    },
    {
      id: 4,
      title: "Доступ к онлайн-курсам",
      text: "Модульные курсы с системой тестирования и аттестации. Прокачивайте вашу команду с федеральными тренерами, не отрываясь от производства.",
      date: "Дата следующего обновления: 1.10.2021",
    },
    {
      id: 5,
      title: "Комьюнити",
      text: "Строители.рф - площадка для нетворкинга. Если вам нужно, чтобы конкретный девелопер поделился опытом, или хотите узнать “Как ему удалось это сделать”, оставьте запрос. Мы познакомим вас с топ-менеджментом и поможем получить все ответы.",
    },
    {
      id: 6,
      title: "Публикации в медиа",
      text: "Станьте автором девелоперского медиа и продвигайте свою экспертность. Публикации - возможность систематизировать свои знания и опыт, а также наращивать индекс цитируемости.",
      date: "Дата запуска опции: 1.12.2021",
    },
  ]);
  return (
    <div className={styles.advantages}>
      <div className="container">
        <div className="inner-container">
          <div className={styles.advantagesLayout}>
            <div className={styles.advantagesSidebar}>
              <h2 className={styles.advantagesSmallHeading}>о проекте</h2>
            </div>
            <div className={styles.advantagesMain}>
              <h3 className={styles.advantagesLargeHeading}>
                Ресурсная и коммуникативная
                <br /> площадка для застройщиков
              </h3>
              <div className={styles.advantagesText}>
                <p>
                  которые хотят улучшать качество своих проектов, наращивать
                  объемы строительства и хорошо зарабатывать.
                </p>
              </div>
              <div className={styles.advantagesInnerLayout}>
                <div className={styles.advantagesInnerSidebar}>
                  <h4 className={styles.advantagesInnerHeading}>
                    Что дает подписка
                  </h4>
                </div>
                <div className={styles.advantagesInnerMain}>
                  <div className={styles.advantagesCards}>
                    {advantages.map((item) => (
                      <div className={styles.advantagesCard} key={item.id}>
                        <h4 className={styles.advantagesCardTitle}>
                          <AdvantageIcon
                            className={styles.advantagesCardIcon}
                          />
                          {item.title}
                        </h4>
                        <div className={styles.advantagesCardContent}>
                          <div className={styles.advantagesCardText}>
                            {item.text}
                          </div>
                          {item.date && (
                            <div className={styles.advantagesCardDate}>
                              {item.date}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
