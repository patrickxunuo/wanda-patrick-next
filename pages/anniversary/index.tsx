import React from "react";
import { createClient } from "contentful";
import styles from "../../styles/anniversary.module.scss";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_TOKEN,
  });
  const res = await client.getEntries({
    content_type: "anniversaries",
  });

  return {
    props: {
      anniversaries: res.items,
    },
  };
}

const Anniversary = ({ anniversaries }) => {
  return (
    <div className={styles.page__container}>
      {anniversaries.map((item) => (
        <div key={item.sys?.id} className={styles.anni__item}>
          <span className={styles.anni__text}>{item.fields?.date}</span>
          <span className={styles.anni__text}>{item.fields?.event}</span>
        </div>
      ))}
    </div>
  );
};

export default Anniversary;