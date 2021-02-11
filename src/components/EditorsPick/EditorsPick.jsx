import React, { useState, useEffect } from "react";
import Styles from "./EditorsPick.module.scss";
import { BsArrowDownRight } from "react-icons/bs";
const EditorsPick = ({ query }) => {
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
    <div className={Styles.editorsPick}>
      <div className={Styles.editor_list}>
        <div className={Styles.section_title}>
          <h2>Editor's Pick</h2>
          <p>
            Read latest editors-pick news and top news live only on Argon News
          </p>
        </div>
        {data.slice(0, 3).map((article) => {
          return (
            <div className={Styles.listItems}>
              <div>
                <BsArrowDownRight className={Styles.iconArrow} />
              </div>
              <div className={Styles.titleAndDate}>
                <h3>{article?.publishedAt}</h3>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={article?.url}
                >
                  <h2>{article?.title}</h2>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className={Styles.editor_showcase}>
        {data.slice(3).map((article) => {
          return (
            <>
              <div
                style={{ backgroundImage: `url(${article?.urlToImage})` }}
                className={Styles.background_image}
              ></div>
              <div className={Styles.showcase_info}>
                <h3>{article?.publishedAt}</h3>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={article?.url}
                >
                  <h2>{article?.title}</h2>
                </a>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default EditorsPick;
