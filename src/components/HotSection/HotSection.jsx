import React, { useState, useEffect } from "react";
import Styles from "./HotSection.module.scss";
import { FaArrowCircleRight } from "react-icons/fa";
const HotSection = ({ query }) => {
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
    <div className={Styles.hotSection}>
      <div className={Styles.container}>
        <h2>What's Hot?</h2>
        <div className={Styles.article_card}>
          <div>
            <h3>
              {data?.publishedAt} {data?.author}
            </h3>
            <h2>{data?.title}</h2>
          </div>
          <a rel="noopener noreferrer" target="_blank" href={data?.url}>
            <FaArrowCircleRight className={Styles.submitIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HotSection;
