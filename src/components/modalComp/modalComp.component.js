import { Modal } from "react-bootstrap";
import AddItemForm from "../addItemForm/addItemForm.component";
import EditItemForm from "../editItemForm/editItemForm.component";
import { AiOutlineClose } from "react-icons/ai";

const ModalComp = ({ show, handleClose, modal, setEditItem }) => {
  const { modalType, modalData, modalTitle } = modal;
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>{modalTitle}</Modal.Title>
        <button
          type="button"
          className={`modal-close_btn p-2`}
          aria-label="Close"
          onClick={() => handleClose()}
        >
          <i className="d-flex justify-content-center align-items-center">
            <AiOutlineClose />
          </i>
        </button>
      </Modal.Header>
      <Modal.Body>
        {/* decide with modal body content (component) will be render dynamicly depend on the modalType value and add the modalData for this content component which it will be need */}
        {modalType === "creat" ? (
          <AddItemForm
            {...{
              ...modalData,
            }}
          />
        ) : modalType === "edit" ? (
          <EditItemForm {...{ ...modalData, setEditItem, handleClose }} />
        ) : (
          ""
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ModalComp;
