import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1, name: "🍌Banana", color: "yellow" },
    { id: 2, name: "🍓Strawberry", color: "red" },
    { id: 3, name: "🔵Blueberry", color: "blue" },
    { id: 4, name: "🍎Apple", color: "red" },
    { id: 5, name: "🍍Pineapple", color: "yellow" },
  ];

  return fruits.map((fruit) => {
    return (
      <div key={fruit.id}>
        <Card name={fruit.name} color={fruit.color} />
      </div>
    );
  });
  // <div className="app">
  //   <Card name="🍌 banana" />
  // </div>
}
