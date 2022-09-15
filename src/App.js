import { useEffect, useState } from "react";
import "./App.css";
import TableListItems from "./components/tableListItems/tableListItems.component";
import useWindowDimensions from "./customHooks/useWindowDimensions";

function App() {
  const [count, setCount] = useState(10000);
  const [items, setItems] = useState([]);
  const [scrollTop, setScrollTop] = useState(0);
  const { windowHeight } = useWindowDimensions();

  const numItems = items.length;
  const itemHeight = 40;
  const innerHeight = numItems * itemHeight;

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
      new Array(count).fill(null).map((_, i) => ({
        id: i,
        subject: `Item ${i}`,
        priority: "normal",
        status: "open",
        description: "Description",
        style: {
          //this the special style to show the item in the right position
          position: "absolute",
          top: `${i * itemHeight + 40}px`, //add 40px to make items begin after the table heading
          width: "100%",
          height: `${itemHeight}px`,
        },
      }))
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
          <TableListItems renderItems={renderItems} />
        </div>
      </div>
    </div>
  );
}

export default App;
