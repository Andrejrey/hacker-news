const NewsList = ({ news }) => {
  return (
    <main>
      <ul>
        {news.map((e) => (
          <li key={e.id}>
            <a href={e.story_url}>{e.story_url}</a>
            {e.author}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default NewsList;
