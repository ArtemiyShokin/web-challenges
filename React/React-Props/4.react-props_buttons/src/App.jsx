export default function App() {
  function handleClick(text) {
    return console.log("Yo have clicketh " + text);
  }
  return (
    <div>
      <Button onClick={handleClick} text="Hello" color="red" />
      <Button onClick={handleClick} text="World" color="grey" />
      <Button onClick={handleClick} text="!" color="green" disabled />
    </div>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      disabled={disabled}
      style={{ backgroundColor: color }}
      onClick={() => onClick(text)}
    >
      {text}
    </button>
  );
}
