import {
  Button,
  Select,
  Typography,
  MenuItem,
  InputLabel,
  FormControl,
  Alert,
  Modal,
  Box,
} from "@mui/material";
import { useState } from "react";
import Container from "./Container";

const MaterialV1 = ({ data }) => {
  const [alertOpen, setAlertOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [contact, setContact] = useState("");

  const handleChange = (event) => {
    setContact(event.target.value);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Container Heading={Typography} title="Material UI" variant="h2">
        <Button onClick={() => setAlertOpen(!alertOpen)}>Button</Button>

        <FormControl fullWidth>
          <InputLabel>How should we contact you?</InputLabel>
          <Select
            value={contact}
            onChange={handleChange}
            label="How should we contact you?"
          >
            <MenuItem value="Email">Email</MenuItem>
            <MenuItem value="Phone">Phone</MenuItem>
            <MenuItem value="Mail">Mail</MenuItem>
          </Select>
        </FormControl>

        <Button onClick={handleOpen}>Open modal</Button>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Typography variant="h6" component="h3">
              Modal title
            </Typography>
            <Typography sx={{ mt: 2 }}>{data.lorem}</Typography>
          </Box>
        </Modal>
      </Container>
      {alertOpen && <Alert severity="success">{data.alertText}</Alert>}
    </>
  );
};

export default MaterialV1;
