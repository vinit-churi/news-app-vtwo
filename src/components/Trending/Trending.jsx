import React, { useState, useEffect } from "react";
import Styles from "./Trending.module.scss";
const Trending = ({ query }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(query)
        .then((data) => data.json())
        .then((data) => data.articles);

      console.log(`this is trending comp ${result}`);
      setData(result);
    };
    fetchData();
  }, [query]);
  return (
    <div className={Styles.trending}>
      <div className={Styles.h1}>
        <div className={Styles.p}>
          <h1>Trending</h1>
          <p>Trending articles in india.</p>
        </div>
      </div>
      <div className={Styles.trending_list}>
        {data.map((article) => {
          return (
            <div className={Styles.article_card}>
              <div
                className={Styles.background_image}
                style={{ backgroundImage: `url(${article?.image})` }}
              ></div>
              <div className={Styles.article_info}>
                <h3>{article?.publishedAt}</h3>
                <h2>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={article?.url}
                  >
                    {article?.title}
                  </a>
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
