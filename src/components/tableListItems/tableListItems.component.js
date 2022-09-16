import TableRowItem from "../tableRowItem/tableRowItem.component";

const TableListItems = ({
  renderItems,
  windowHeight,
  onScroll,
  innerHeight,
  handleShow,
  setModal,
}) => {
  return (
    <div className="tableContainer">
      <div className="tableCont">
        <div className="tableHeding">
          <div className="tableRowHeding">
            <div className="cell">id</div>
            <div className="cell">subject</div>
            <div className="cell">priority</div>
            <div className="cell">status</div>
            <div className="cell">description</div>
            <div className="cell">edit</div>
          </div>
        </div>
        <div className="tableBody">
          <div
            className="scroll"
            style={{ overflowY: "scroll", height: `${windowHeight - 110}px` }} //50px for the heading and 60px for nav
            onScroll={onScroll}
          >
            <div
              className="inner"
              style={{ position: "relative", height: `${innerHeight}px` }}
            >
              {renderItems.map(
                ({ id, subject, priority, status, description, style }) => (
                  <TableRowItem
                    key={subject}
                    {...{
                      id,
                      subject,
                      priority,
                      status,
                      description,
                      style,
                      handleShow,
                      setModal,
                    }}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableListItems;
