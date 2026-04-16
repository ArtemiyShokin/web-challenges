import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button> Hello</Button>
      <Button> Again </Button>
      <Button>Friend </Button>
      <Button>of a Friend </Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
