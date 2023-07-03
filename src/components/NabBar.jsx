const NavBar = () => {
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
      <input type="text" placeholder="search"></input>
      <button href="">Login</button>
    </nav>
  );
};

export default NavBar;
