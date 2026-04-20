import "./styles.css";
import { useState } from "react";

export default function App() {
  // let code = "?";
  const [code, setCode] = useState("" /*empty string */);

  const validCode = "🐡🐠🐋";

  function handleClick(emoji) {
    setCode(code + emoji);
    console.log(emoji);
    console.log(code);
  }

  function handleCodeReset() {
    console.log("I am resetting the code now!");
    setCode("");
    console.log("Current input: " + code);
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
      </div>

      <button type="button" onClick={handleCodeReset}>
        Reset
      </button>

      {code === validCode && <p>Valid code! 🎉</p>}
    </div>
  );
}

// <button
//       type="button"
//       onClick={() => {
//         console.log("Reset Code!");
//       }}
//     >
//       Reset
//     </button>
