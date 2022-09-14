import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(100);
  const [items, setItems] = useState([]);
  const [scrollTop, setScrollTop] = useState(0);

  const numItems = items.length;
  const itemHeight = 40;
  const innerHeight = numItems * itemHeight;
  const windowHeight = 400;
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    numItems - 1, // don't render past the end of the list
    Math.floor((scrollTop + windowHeight) / itemHeight)
  );

  const onScroll = (e) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  const renderItems = [];
  for (let i = startIndex; i <= endIndex; i++) {
    renderItems.push(items[i]);
  }

  useEffect(() => {
    setItems(
      new Array(count)
        .fill(null)
        .map((_, i) => ({ index: i, name: `Item ${i}` }))
    );
  }, []);

  return (
    <div className="page">
      <div
        className="scroll"
        style={{ overflowY: "scroll", height: `${windowHeight}px` }}
        onScroll={onScroll}
      >
        <div
          className="inner"
          style={{ position: "relative", height: `${innerHeight}px` }}
        >
          {items.map((i) => (
            <div
              key={i.name}
              className="item"
              style={{ height: `${itemHeight}px` }}
            >
              <label>{i.name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
