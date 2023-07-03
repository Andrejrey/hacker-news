const NewsList = ({ news }) => {
  console.log(news);
  return (
    <main>
      <ul>
        {news.map(({ story_url, story_title, author, created_at }, index) => (
          <li key={index}>
            <a href={story_url}>{story_title}</a>
            <p>Author: {author}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default NewsList;
