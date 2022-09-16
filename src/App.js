import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import ModalComp from "./components/modalComp/modalComp.component";
import TableListItems from "./components/tableListItems/tableListItems.component";
import { usePrevious } from "./customHooks/usePrev";
import useWindowDimensions from "./customHooks/useWindowDimensions";
import { objIsNotEmpty } from "./utilities/objIsNotEmpty ";

function App() {
  //for handle modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [count, setCount] = useState(10000);
  const [items, setItems] = useState([]);
  const [renderItems, setRenderItems] = useState([]);
  const [scrollTop, setScrollTop] = useState(0);
  const [newItem, setNewItem] = useState({});

  const [editItem, setEditItem] = useState({});
  //use this to force change the renderItems
  const [editState, setEditState] = useState(false);

  const { windowHeight } = useWindowDimensions();
  //use this to store the modal diffrent data to send it from the btn to the modal component
  const [modal, setModal] = useState({});

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

  //2- preper the newRrenderItems depend on the items and the startIndex and endIndex which calclate depend on the scrollTop
  //call this again when change items or scrollTop
  useEffect(() => {
    const newRrenderItems = [];
    /* for (let i = startIndex; i <= endIndex; i++) { //if need to make ascending order
      newRrenderItems.push(items[i]);
    } */
    //to descending order
    for (let i = startIndex; i <= endIndex; i++) {
      newRrenderItems.push(items[i]);
    }
    setRenderItems(newRrenderItems);
  }, [items, scrollTop, editState]);

  //1- in initial render create mock data for items and set the state with it
  useEffect(() => {
    setItems(
      new Array(count).fill(null).map((_, i) => {
        return {
          /* id: i, //if need to make ascending order
          subject: `Item ${i}`, */ //if need to make ascending order
          id: count - i, //to descending order
          subject: `Item ${count - i}`, //to descending order
          priority: "normal",
          status: "open",
          description: "Description",
          style: {
            //this the special style to show the item in the right position
            position: "absolute",
            top: `${i * itemHeight}px`,
            width: "100%",
            height: `${itemHeight}px`,
          },
        };
      })
    );
  }, []);

  //select the prevCount
  const prevCount = usePrevious(count);
  useEffect(() => {
    //3- do that ONLY when new item added
    if (prevCount && prevCount !== count) {
      //add the new item in the top of the items array
      const newArr = items;
      newArr.unshift(newItem);
      //loop on the newArr and adjust the style which will determined the right new postion for every item
      const readyNewArr = newArr.map((item, i) => {
        return {
          ...item,
          style: {
            //this the special style to show the item in the right position
            position: "absolute",
            top: `${i * itemHeight}px`,
            width: "100%",
            height: `${itemHeight}px`,
          },
        };
      });
      //set the items state with the readyNewArr and that will change the renderItems state
      setItems(readyNewArr);
    }
  }, [count]);

  useEffect(() => {
    //run this ONLY when edit Item and avoid first render
    if (objIsNotEmpty(editItem)) {
      //select the editItem index
      const editItemIndex = items.findIndex((obj) => obj.id == editItem.id);
      //Update the targeted item object in items with the editItem object data
      items[editItemIndex] = editItem;
      //set the items state with the readyNewArr and that will change the renderItems state
      setItems(items);
      //use this to force change the renderItems
      setEditState(!editState);
    }
  }, [editItem]);

  return (
    <div className="page">
      <nav className="nav">
        <div className="nav-cont justify-content-between">
          <h1 className="fs-3">PlanRadar Dash</h1>
          <Button
            className="creat-item_btn"
            variant="primary"
            onClick={() => {
              handleShow();
              //set the modal state to let modal component know witch modalType, modalTitle and modalData it will show
              setModal({
                modalType: "creat",
                modalTitle: "create item",
                modalData: {
                  numItems,
                  itemHeight,
                  handleClose,
                  setCount,
                  setNewItem,
                },
              });
            }}
          >
            create item{" "}
          </Button>
        </div>
      </nav>
      <TableListItems
        {...{
          renderItems,
          windowHeight,
          onScroll,
          innerHeight,
          handleShow,
          setModal,
        }}
      />
      {/* general modal component */}
      <ModalComp {...{ show, handleClose, modal, setEditItem }} />
    </div>
  );
}

export default App;
