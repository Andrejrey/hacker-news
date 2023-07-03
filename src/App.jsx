import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NabBar";
import NewsList from "./components/NewsList";
import axios from "axios";
import SearchTitle from "./components/SearchTitle";

function App() {
  const [post, setPost] = useState([]);
  const [searchValue, setSearchValue] = useState("react");
  console.log("searchValue", searchValue);

  function addQuery(value) {
    setSearchValue(value);
  }

  useEffect(() => {
    axios
      .get(`http://hn.algolia.com/api/v1/search_by_date?query=${searchValue}`)
      .then((response) => {
        setPost(response.data.hits);
      });
  }, [searchValue]);

  return (
    <>
      <NavBar setSearchValue={setSearchValue} addQuery={addQuery} />
      <SearchTitle searchValue={searchValue} />
      <NewsList news={post} />
    </>
  );
}

export default App;
