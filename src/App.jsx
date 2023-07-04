import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./components/NabBar";
import NewsList from "./components/NewsList";
import SearchTitle from "./components/SearchTitle";
import Pagination from "./Pagination";

function App() {
  const [post, setPost] = useState([]);
  const [searchValue, setSearchValue] = useState("react");
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

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

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = post.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <NavBar setSearchValue={setSearchValue} addQuery={addQuery} />
      <SearchTitle searchValue={searchValue} />
      <NewsList news={currentPosts} />
      <Pagination
        totalPosts={post.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default App;
