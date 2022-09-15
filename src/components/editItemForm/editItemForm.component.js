import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const EditItemForm = ({
  subject,
  id,
  priority,
  status,
  description,
  setEditItem,
  style,
  handleClose,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    //set the form inputs with the data of the item need to edit
    setValue("subject", subject);
    setValue("description", description);
    setValue("status", status);
    setValue("priority", priority);
  }, []);

  const onSubmit = async (data) => {
    //send the new data for item after edit it
    setEditItem({
      ...data,
      id: id,
      style,
    });
    //close the modal
    handleClose();
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicSubject">
        <Form.Control
          type="text"
          placeholder="subject"
          {...register("subject", {
            required: true,
          })}
          className={`${errors.subject && "inputErrorMassage"}`}
        />
      </Form.Group>

      <Form.Group className={`mb-3`} controlId="formBasicPriority">
        <Form.Select {...register("priority")}>
          <option value={"normal"}>normal</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className={`mb-3`} controlId="formBasicstatus">
        <Form.Select {...register("status")}>
          <option value={"open"}>open</option>
          <option value={"in progress"}>in progress</option>
          <option value={"resolved"}>resolved</option>
          <option value={"feedback"}>feedback</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Control
          placeholder="description"
          type="text"
          {...register("description", {
            required: true,
          })}
          className={`${errors.description && "inputErrorMassage"}`}
        />
      </Form.Group>

      <div>
        <Button className="w-100 p-2 p-sm-3" variant="primary" type="submit">
          add item
        </Button>
      </div>
    </Form>
  );
};

export default EditItemForm;
