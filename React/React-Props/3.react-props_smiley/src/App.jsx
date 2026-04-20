export default function App() {
  return <Smiley />;
}

function Smiley({ isHappy }) {
  return <div>{isHappy ? <p>😃</p> : <p>😥</p>}</div>;
}
