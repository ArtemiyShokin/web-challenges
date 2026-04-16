export default function App() {
  return <Sum valueA={-9} valueB={10} />;
}

function Sum({ valueA, valueB }) {
  const valuesSum = valueA + valueB;
  return (
    <h1>
      {valueA} + {valueB} = {valuesSum}{" "}
    </h1>
  );
}
