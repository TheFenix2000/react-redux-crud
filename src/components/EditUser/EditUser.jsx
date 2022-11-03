import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Alert,
  Collapse,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleUser, updateUser } from "../../redux/actions";
import "./EditUser.css";
function EditUser() {
  let navigate = useNavigate();
  let { id } = useParams();
  const [state, setState] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState(false);
  let dispatch = useDispatch();
  const { name, address, email, phone } = state;

  const styles = {
    add: {
      backgroundColor: "#6932a1",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "#7a43b2",
      },
    },
    box: {
      "& .MuiTextField-root": {
        m: 1,
        width: "50ch",
      },
    },
  };
  const { user } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);
  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !email || !phone) {
      setErr("No empty fields!");
      setSuccess(false);
      setTimeout(() => {
        setErr("");
      }, 2000);
    } else {
      dispatch(updateUser(state, id));
      setErr("");
      setSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div className="container pt-5 mt-5 d-flex column align-center justify-content-center">
      <Box
        component="form"
        sx={styles.box}
        noValidate
        autoComplete="off"
        className="fill"
        onSubmit={handleSubmit}
      >
        <Paper className="bg-light d-flex flex-colum justify-content-center align-center">
          <div className="d-flex flex-column align-items-center justify-content-start px-3 py-3">
            <h2>Edit User</h2>
            <Stack sx={{ position: "fixed" }} spacing={2}>
              <Collapse in={err.length > 0 || success}>
                {err ? (
                  <Alert variant="filled" severity="error">
                    {err}
                  </Alert>
                ) : success ? (
                  <Alert variant="filled" severity="success">
                    User updated successfully! Redirecting...
                  </Alert>
                ) : null}
              </Collapse>
            </Stack>
            <TextField
              id="outlined-basic"
              label="Username"
              placeholder="Enter username"
              value={name || ""}
              name="name"
              type="text"
              className="fill"
              onChange={handleInputChange}
            />
            <TextField
              id="outlined-basic"
              label="Phone number"
              placeholder="Enter phone number"
              value={phone || ""}
              name="phone"
              className="fill"
              type="number"
              onChange={handleInputChange}
            />
            <TextField
              id="outlined-basic"
              label="Address"
              placeholder="Enter address"
              value={address || ""}
              name="address"
              className="fill"
              type="text"
              onChange={handleInputChange}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              placeholder="Enter email"
              value={email || ""}
              name="email"
              className="fill"
              type="email"
              onChange={handleInputChange}
            />
            <Button variant="contained" sx={styles.add} type="submit">
              Update
            </Button>
          </div>
        </Paper>
      </Box>
    </div>
  );
}

export default EditUser;
