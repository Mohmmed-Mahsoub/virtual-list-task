import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddItemForm = ({
  numItems,
  itemHeight,
  handleClose,
  setCount,
  setNewItem,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setNewItem({
      ...data,
      id: numItems + 1,
      style: {
        //this the special style to show the item in the right position
        position: "absolute",
        /* top: `${numItems * itemHeight}px`, */ //add to end
        top: `0px`, //add to start
        width: "100%",
        height: `${itemHeight}px`,
      },
    });
    //to make react know a new item added
    setCount((prevState) => prevState + 1);

    //reset form inputs
    setValue("subject", "");
    setValue("description", "");
    //close moda;
    handleClose();
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicSubject">
        <Form.Control
          type="text"
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

export default AddItemForm;
