import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, loadUsers } from "../../redux/actions";
import { Box, Button, ButtonGroup, Modal, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Home() {
  let navigate = useNavigate();
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#32174d",
      color: theme.palette.common.white,
      fontWeight: "bold",
      textAlign: "center",
      fontSize: "1.2rem",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: "1rem",
      textAlign: "center",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#ffe6ff",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const [open, setOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState();
  const handleOpen = (id) => {
    setIdToDelete(id);
    setOpen(true);
  };
  const handleClose = () => {
    setIdToDelete(null);
    setOpen(false);
  };
  let dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  const styles = {
    edit: {
      backgroundColor: "#6932a1",
      "&:hover": {
        backgroundColor: "#7a43b2",
      },
    },
    delete: {
      backgroundColor: "red",
      "&:hover": {
        backgroundColor: "#ff3333",
      },
    },
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    handleClose();
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "3px solid #32174d",
    boxShadow: 24,
    borderRadius: "25px",
    p: 4,
  };
  return (
    <div className="container pt-5 mt-5">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to delete this user?
          </Typography>
          <ButtonGroup
            className="mt-4"
            variant="contained"
            aria-label="outlined button group"
          >
            <Button
              sx={styles.delete}
              className="py-2"
              onClick={() => handleDelete(idToDelete)}
            >
              Yes
            </Button>
            <Button
              sx={styles.edit}
              className="py-2"
              onClick={() => handleClose()}
            >
              No
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
      <TableContainer component={Paper} elevation={3}>
        <Table sx={{ minWidth: 900 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component="th" scope="row">
                    {user.id}
                  </StyledTableCell>
                  <StyledTableCell>{user.name}</StyledTableCell>
                  <StyledTableCell>{user.address}</StyledTableCell>
                  <StyledTableCell>{user.email}</StyledTableCell>
                  <StyledTableCell>{user.phone}</StyledTableCell>
                  <StyledTableCell>
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined button group"
                      sx={{ color: "#32174d" }}
                    >
                      <Button
                        sx={styles.edit}
                        className="py-2"
                        onClick={() => navigate(`/editUser/${user.id}`)}
                      >
                        <i className="fa fa-solid fa-pencil"></i>
                      </Button>
                      <Button
                        onClick={() => handleOpen(user.id)}
                        sx={styles.delete}
                        className="py-2"
                      >
                        <i className="fa fa-solid fa-trash"></i>
                      </Button>
                    </ButtonGroup>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Home;
