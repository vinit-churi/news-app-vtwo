import React from "react";
import styles from "./App.module.scss";
import { Route, Switch, useHistory } from "react-router-dom";
import Request from "./requests";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CategoryQuery from "./components/CategoryQuery/CategoryQuery";
import HotSection from "./components/HotSection/HotSection";
import Trending from "./components/Trending/Trending";
import EditorsPick from "./components/EditorsPick/EditorsPick";
function App() {
  const [query, setQuery] = React.useState();
  const [fullQuery, setFullQuery] = React.useState("economy");
  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    setFullQuery(query);
    history.push("/search");
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className={styles.app}>
      <Navbar handleSubmit={handleSubmit} handleChange={handleChange} />
      <Switch>
        <Route exact path="/">
          <Hero query={Request.showcase} />
          <HotSection query={Request.hot} />
          <Trending query={Request.trending} />
          <EditorsPick query={Request.EditorsPick} />
        </Route>
        <Route exact path="/science">
          <CategoryQuery query={Request.categoryScience} />
        </Route>
        <Route exact path="/technology">
          <CategoryQuery query={Request.categoryTechology} />
        </Route>
        <Route exact path="/sports">
          <CategoryQuery query={Request.categorySports} />
        </Route>
        <Route exact path="/business">
          <CategoryQuery query={Request.categoryBusiness} />
        </Route>
        <Route exact path="/entertainment">
          <CategoryQuery query={Request.categoryEntertainment} />
        </Route>
        <Route exact path="/search">
          <CategoryQuery query={fullQuery} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
