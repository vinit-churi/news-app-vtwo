import React from "react";
import styles from "./App.module.scss";
import { Route, Switch, useHistory } from "react-router-dom";
import Request, { RequsetG } from "./requests";
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
    let querySting = encodeURI(
      `https://gnews.io/api/v4/search?q=${query}&token=8d8ce8f49342b07f2488082a9c8d9f59&max=6`
    );
    setFullQuery(querySting);
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
          {console.log(RequsetG.showcase)}
          <Hero query={RequsetG.showcase} />
          <HotSection query={RequsetG.hot} />
          <Trending query={RequsetG.trending} />
          <EditorsPick query={RequsetG.EditorsPick} />
        </Route>
        <Route exact path="/science">
          <CategoryQuery query={RequsetG.categoryScience} />
        </Route>
        <Route exact path="/technology">
          <CategoryQuery query={RequsetG.categoryTechology} />
        </Route>
        <Route exact path="/sports">
          <CategoryQuery query={RequsetG.categorySports} />
        </Route>
        <Route exact path="/business">
          <CategoryQuery query={RequsetG.categoryBusiness} />
        </Route>
        <Route exact path="/entertainment">
          <CategoryQuery query={RequsetG.categoryEntertainment} />
        </Route>
        <Route exact path="/search">
          <CategoryQuery query={fullQuery} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
