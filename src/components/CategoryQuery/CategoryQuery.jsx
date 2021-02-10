import React from "react";
import Styles from "./CategoryQuery.module.scss";
const CategoryQuery = ({ query }) => {
  return (
    <div className={Styles.categoryQuery}>
      <h3>{`CategoryQuery ${query}`}</h3>
    </div>
  );
};

export default CategoryQuery;
