import TableRowItem from "../tableRowItem/tableRowItem.component";

const TableListItems = ({ renderItems }) => {
  return (
    <div className="tableContainer">
      <div className="tableHeding">
        <div className="tableRowHeding">
          <div className="cell">id</div>
          <div className="cell">subject</div>
          <div className="cell">priority</div>
          <div className="cell">status</div>
          <div className="cell">description</div>
        </div>
      </div>
      <div className="tableBody">
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
              }}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TableListItems;
