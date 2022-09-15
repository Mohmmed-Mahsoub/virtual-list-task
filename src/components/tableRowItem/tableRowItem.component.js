const TableRowItem = ({
  style,
  subject,
  id,
  priority,
  status,
  description,
}) => {
  return (
    <div className="tableRowItem" key={id} style={style}>
      <div className="cell">{id}</div>
      <div className="cell">{subject}</div>
      <div className="cell">{priority}</div>
      <div className="cell">{status}</div>
      <div className="cell">{description}</div>
    </div>
  );
};

export default TableRowItem;
