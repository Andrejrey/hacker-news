import { useState } from "react";

const NavBar = ({ addQuery }) => {
  const [value, setValue] = useState("");
  console.log("value", value);

  function handleSubmit(event) {
    event.preventDefault();
    if (!value) {
      alert("Type something...");
    } else {
      addQuery(value);
      setValue("");
    }
  }

  return (
    <nav>
      <h3>Hacker News</h3>
      <ul>
        <li>
          <button>New</button>
        </li>
        <li>
          <button>Past</button>
        </li>
        <li>
          <button>Comments</button>
        </li>
        <li>
          <button>Ask</button>
        </li>
        <li>
          <button>Show</button>
        </li>
        <li>
          <button>Jobs</button>
        </li>
        <li>
          <button>Submit</button>
        </li>
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setValue(event.target.value)}
          type="text"
          placeholder="search"
          value={value}
        ></input>
        <button>Search</button>
      </form>
      <button>Login</button>
    </nav>
  );
};

export default NavBar;
