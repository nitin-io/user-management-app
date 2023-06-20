import PropTypes from "prop-types";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { UsersContext } from "../context/UsersContext";
import UpdateModal from "./UpdateModal.jsx";

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

const UserCard = ({ name, email, phoneNumber }) => {
  const [users, setUsers] = useContext(UsersContext);
  const [open, setOpen] = useState(false);

  const handleDelete = (email) => {
    const filteredUsers = users.filter((user) => user.email != email);
    setUsers(filteredUsers);
    localStorage.setItem("users", JSON.stringify(filteredUsers));
    setOpen(false);
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <h3>Email ID: {email}</h3>
      <h3>Phone Number: {phoneNumber}</h3>
      <div>
        <Button
          onClick={() => setOpen(true)}
          variant="outlined"
          size="small"
          style={{ marginTop: "2rem" }}
          color="error"
        >
          Delete
        </Button>
        <UpdateModal
          oldName={name}
          oldEmail={email}
          oldPhoneNumber={phoneNumber}
        />
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box sx={style}>
            <Typography variant="h6">{"Are you sure?"}</Typography>
            <Box style={{ marginTop: "1rem" }}>
              <Button
                variant="contained"
                size="small"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant="outlined"
                size="small"
                style={{ marginLeft: "1rem" }}
                color="error"
                onClick={() => handleDelete(email)}
              >
                Delete
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.number,
};

export default UserCard;
