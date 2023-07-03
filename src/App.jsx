import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NabBar";
import axios from "axios";

function App() {
  const [post, setPost] = useState({});

  console.log("post", post);

  useEffect(() => {
    axios
      .get("http://hn.algolia.com/api/v1/search_by_date?query=story")
      .then((response) => {
        setPost(response.data);
      });
  }, []);

  return (
    <>
      <NavBar />
    </>
  );
}

export default App;
