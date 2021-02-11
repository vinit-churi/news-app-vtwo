import React, { useState, useEffect } from "react";
import Styles from "./Hero.module.scss";
const Hero = ({ query }) => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(query)
        .then((data) => data.json())
        .then((data) => data.articles);
      setData(...result);
    };
    fetchData();
  }, [query]);
  return (
    <div className={Styles.hero}>
      <div className={Styles.article_card}>
        <h3>
          {data?.publishedAt} {data?.author}
        </h3>
        <h2>{data?.title}</h2>
        <p>{data?.description}</p>
        <div className={Styles.readMore}>
          <a rel="noopener noreferrer" target="_blank" href={data?.url}>
            read more
          </a>
        </div>
      </div>
      <div
        className={Styles.background_image}
        style={{ backgroundImage: `url(${data?.urlToImage})` }}
      ></div>
    </div>
  );
};

export default Hero;

/*

{data.map((article) => {
        return (
          <>
            <div className="article_card">
              <h3>{article?.publishedAt}</h3>
            </div>
            <div
              className="background_image"
              style={{ backgroundImage: {article.urlToImage} }}
            ></div>
          </>
        );
      })}
*/
