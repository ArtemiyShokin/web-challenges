import { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);

  function handleIncrementPeople() {
    return (setPeople(people + 1), console.log("incrementing"));
  }
  function handleDecrementPeople() {
    return (setPeople(people - 1), console.log("decrementing"));
  }
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        onHandleDecrement={handleDecrementPeople}
        onHandleIncrement={
          handleIncrementPeople
        } /* ist das der richtige weg? hier weitermachen 
      wenn ich zur challenge zurückkomme! */
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
