import React from "react";
import { createClient } from "contentful";
import styles from "../../styles/anniversary.module.scss";
import { calcualteDiffInDaydayDiff } from "../../utils/utils";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_TOKEN!,
  });
  const res = await client.getEntries({
    content_type: "anniversaries",
    order: "fields.date",
  });
  return {
    props: {
      anniversaries: res.items,
    },
  };
}

const Anniversary = ({ anniversaries }: any) => {
  return (
    <div className={styles.page__container}>
      {anniversaries.map((item: any, index: number) => (
        <div
          key={item.sys?.id}
          className={styles.anni__item}
          style={{
            marginTop: `min(20px, ${
              calcualteDiffInDaydayDiff(
                item.fields.date,
                anniversaries[index - 1]?.fields?.date
              ) / 10
            }px)`,
          }}
        >
          <span className={styles.anni__text}>{item.fields?.date}</span>
          <span className={styles.anni__text}>{item.fields?.event}</span>
        </div>
      ))}
    </div>
  );
};

export default Anniversary;
