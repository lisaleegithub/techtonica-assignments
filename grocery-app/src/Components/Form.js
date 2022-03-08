import { useState } from "react";

const Form = (props) => {

  // useState hook to manage data
  const [value, setValue] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    props.addItem(value);
    setValue("");
    console.log(value + " added");
  };

  return (
    <div className="List">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter an item"
            className="input"
            value={value}
            // onChange function to set state to the value entered
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Add Item</button>
        </form>
    </div>
  );
};

export default Form;