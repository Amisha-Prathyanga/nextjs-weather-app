import { FC } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

interface AddCityProps {}

const AddCity: FC<AddCityProps> = () => {
  return (
    <div className="mx-auto flex justify-center pb-10">
      <InputGroup>
        <Form.Control
          className="bg-[#333333] p-1 px-4 border-[#333333] bor rounded-l-md"
          placeholder="Enter a City"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button
          className="bg-[#9a50e5] p-1 px-4 text-white rounded-md"
          variant="outline-secondary"
          id="button-addon2"
        >
          Add City
        </Button>
      </InputGroup>
    </div>
  );
};

export default AddCity;
