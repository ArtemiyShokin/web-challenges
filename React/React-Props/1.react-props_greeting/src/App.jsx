export default function App() {
  return (
    <div>
      <Greeting name="Feline" />
      <Greeting name="Alex" />
    </div>
  );
}

function Greeting({ name }) {
  // return (
  //   <article>
  //    <p> {`Hello ${name === "Feline" ? "Hello, coach!" :  name}!`} </p>
  //   </article>
  // );

  return (
    <article>
      <p>Hello {name === "Feline" ? "Coach" : name} !</p>
    </article>
  );
}

// name = "Feline" ? Hello, coach! : Hello {name}
