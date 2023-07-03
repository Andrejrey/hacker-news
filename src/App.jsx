import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NabBar";
import NewsList from "./components/NewsList";
import axios from "axios";

function App() {
  const [post, setPost] = useState([]);
  const [searchValue, setSearchValue] = useState("react");

  useEffect(() => {
    axios
      .get(`http://hn.algolia.com/api/v1/search_by_date?query=${searchValue}`)
      .then((response) => {
        setPost(response.data.hits);
      });
  }, []);

  return (
    <>
      <NavBar setSearchValue={setSearchValue} />
      <NewsList news={post} />
    </>
  );
}

export default App;
