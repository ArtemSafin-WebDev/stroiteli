import React, { useState } from "react";
import styles from "./Community.module.scss";

import com1 from "../../img/community/1.jpg";
import com2 from "../../img/community/2.jpg";
import com3 from "../../img/community/3.jpg";
import com4 from "../../img/community/4.jpg";
import com5 from "../../img/community/5.jpg";
import { Link } from "react-router-dom";

const Community = () => {

   
  const [persons, setPersons] = useState([
    {
      imageSrc: com1,
    },
    {
      imageSrc: com2,
    },
    {
      imageSrc: com3,
    },
    {
      imageSrc: com4,
    },
    {
      imageSrc: com5,
    },
  ]);

  if (!persons.length) return null;

  return (
    <Link to="/" className={styles.community}>
      <div className={styles.communityTitle}>Комьюнити</div>
      <div className={styles.communityPersons}>
        {
            persons.map(person => <div className={styles.communityPerson}>
                <img src={person.imageSrc} alt="Член сообщества" className={styles.communityPersonImage}/>
            </div>)
        }
      </div>
    </Link>
  );
};

export default Community;
