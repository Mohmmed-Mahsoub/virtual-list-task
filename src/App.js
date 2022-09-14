import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(10000);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // repopulate the list when count changes
    setItems(
      new Array(count)
        .fill(null)
        .map((_, i) => ({ index: i, name: `Item ${i}` }))
    );
  }, []);

  return (
    <div className="page">
      <div className="scroll">
        <div className="inner">
          {items.map((i) => (
            <div key={i.name} className="item">
              <label>{i.name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
