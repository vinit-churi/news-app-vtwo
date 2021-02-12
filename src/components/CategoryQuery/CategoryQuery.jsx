import React, { useState, useEffect } from "react";
import Styles from "./CategoryQuery.module.scss";
const CategoryQuery = ({ query }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(query)
        .then((data) => data.json())
        .then((data) => data.articles)
        .catch((err) => console.log(`this is ${err}`));

      console.log(`this is Editors pick comp ${result}`);
      setData(result);
    };
    fetchData();
  }, [query]);
  return (
    <div className={Styles.categoryQuery}>
      {data.map((article, index) => (
        <>
          <div key={index}>
            <div
              className={Styles.background_image}
              style={{ backgroundImage: `url(${article?.image})` }}
            ></div>

            <a rel="noopener noreferrer" target="_blank" href={article?.url}>
              <h1>{article.title}</h1>
            </a>
          </div>
        </>
      ))}
    </div>
  );
};

export default CategoryQuery;
