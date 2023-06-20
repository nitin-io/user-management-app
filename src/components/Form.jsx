import { useState, useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Form = ({ handleCancel }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [users, setUsers] = useContext(UsersContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, { name, email, phoneNumber }]);
    localStorage.setItem(
      "users",
      JSON.stringify([...users, { name, email, phoneNumber }])
    );
    setName("");
    setEmail("");
    setPhoneNumber("");
    handleCancel();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="user-form">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="phone-number">Phone Number: </label>
        <input
          type="number"
          required
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          minLength="10"
          max="9999999999"
        />
        <div style={{ marginTop: "20px" }}>
          <Button
            onClick={handleCancel}
            variant="outlined"
            style={{ marginRight: "20px" }}
          >
            Cancel
          </Button>
          <Button variant={"contained"} type="submit">
            Add User
          </Button>
        </div>
      </form>
    </>
  );
};

Form.propTypes = {
  handleCancel: PropTypes.func,
};

export default Form;
