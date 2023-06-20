import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";
import { UsersContext } from "../context/UsersContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "0.5rem",
  boxShadow: 24,
  p: 4,
};

const UpdateModal = ({ oldName, oldEmail, oldPhoneNumber }) => {
  const [name, setName] = useState(oldName || "");
  const [email, setEmail] = useState(oldEmail || "");
  const [phoneNumber, setPhoneNumber] = useState(oldPhoneNumber || "");
  const [users, setUsers] = useContext(UsersContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    const userIndex = users.findIndex((user) => user.email === oldEmail);

    const updatedUsers = [...users];
    updatedUsers[userIndex] = {
      name,
      email,
      phoneNumber,
    };

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    handleClose();
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="outlined"
        size="small"
        style={{ margin: "2rem 0 0 1rem" }}
      >
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <>
            <form className="user-form">
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
                  onClick={handleClose}
                  variant="outlined"
                  style={{ marginRight: "20px" }}
                >
                  Cancel
                </Button>
                <Button
                  variant={"contained"}
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Save Changes
                </Button>
              </div>
            </form>
          </>
        </Box>
      </Modal>
    </>
  );
};

UpdateModal.propTypes = {
  oldName: PropTypes.string,
  oldEmail: PropTypes.string,
  oldPhoneNumber: PropTypes.number,
};

export default UpdateModal;
