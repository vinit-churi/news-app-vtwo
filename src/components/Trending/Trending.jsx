import React from "react";
import Styles from "./Trending.module.scss";
const Trending = () => {
  return (
    <div className={Styles.trending}>
      <h2>Trending</h2>
      <div className={Styles.trending_list}></div>
    </div>
  );
};

export default Trending;
