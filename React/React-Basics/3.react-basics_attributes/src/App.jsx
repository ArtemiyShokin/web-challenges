import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title"> Hello Globs!</h2>
      <label htmlFor="coolName">label label</label>
      <input id="coolName" type="text" />
      <a
        className="article__link"
        href="https://react.dev/blog/2023/03/16/introducing-react-dev"
      >
        {" "}
        The NEW react stuff
      </a>
    </article>
  );
}
