import { useState } from "react";
import "./App.css";

const Data = [
  { make: "gibson", model: "strat" },
  { make: "fender", model: "strat" },
  { make: "axe", model: "strat" },
];

function App() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const getSelectedCategories = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
      return;
    }

    setSelectedCategories([...selectedCategories, category]);
  };

  return (
    <div className="App">
      {Data.filter(({ make }) =>
        selectedCategories.length !== 0
          ? selectedCategories.includes(make)
          : selectedCategories
      ).map(({ make, model }, index) => (
        <Card make={make} model={model} key={index} />
      ))}

      {Data.map(({ make }, index) => (
        <div style={{ color: "blue" }}>
          <label htmlFor={make}>{make}</label>
          <input
            key={index}
            id={make}
            type="checkbox"
            value={make}
            checked={selectedCategories.includes(make)}
            onChange={() => getSelectedCategories(make)}
          />
        </div>
      ))}

      {selectedCategories.map((make, index) => (
        <button
          key={index}
          id={make}
          value={make}
          onClick={() => getSelectedCategories(make)}
        >
          {make}
        </button>
      ))}
    </div>
  );
}

export default App;

interface CardProps {
  make: string;
  model: string;
}

const Card = ({ make, model }: CardProps) => {
  return (
    <div style={{ background: "lightgrey", padding: "20px", margin: "10px" }}>
      <h2>{make}</h2>
      <p>{model}</p>
    </div>
  );
};
