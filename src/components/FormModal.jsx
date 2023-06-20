import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Form from "./Form";
import Modal from "@mui/material/Modal";

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

const BasicModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Add New User
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Form handleCancel={handleClose} />
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
