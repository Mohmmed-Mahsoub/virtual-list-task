import { Button } from "react-bootstrap";
import { RiEditBoxLine } from "react-icons/ri";
const TableRowItem = ({
  style,
  subject,
  id,
  priority,
  status,
  description,
  handleShow,
  setModal,
}) => {
  return (
    <div className="tableRowItem" key={id} style={style}>
      <div className="cell">{id}</div>
      <div className="cell">{subject}</div>
      <div className="cell">{priority}</div>
      <div className="cell">{status}</div>
      <div className="cell">{description}</div>
      <div className="cell">
        <Button
          className="p-1 d-flex m-auto"
          variant="primary"
          onClick={() => {
            handleShow();
            //set the modal state to let modal component know witch modalType, modalTitle and modalData it will show
            setModal({
              modalType: "edit",
              modalTitle: "edit item",
              modalData: { subject, id, priority, status, description, style },
            });
          }}
        >
          <RiEditBoxLine />{" "}
        </Button>
      </div>
    </div>
  );
};

export default TableRowItem;
