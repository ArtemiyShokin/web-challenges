import "./styles.css";

function HelloWorldArticle() {
  return (
    <article>
      <h1>I am a header! Wooho</h1>
      <p> ..and I have a lot to say about this.</p>
    </article>
  );
}

export default function App() {
  return <HelloWorldArticle />;
}
