import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import {
  Box,
  TextField,
  Stack,
  Button,
  Paper,
  Typography,
} from "@mui/material";

export const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());

    if (!localStorage.getItem("studentAccount")) {
      console.log("Local Storage is Empty!");
      return false;
    }
    if (
      process.env.REACT_APP_USER === value.username &&
      process.env.REACT_APP_PASS === value.password
    ) {
      navigate("/teacher");
    } else {
      const authenticate = JSON.parse(localStorage.getItem("studentAccount"));
      const currentUser = authenticate.filter(
        (el) =>
          (el.phone === value.username || el.email === value.username) &&
          el.pass === value.password
      );

      if (!currentUser.length) {
        console.log("No user found!");
      } else {
        localStorage.setItem("currentUser", JSON.stringify(currentUser[0]));
        navigate("/student");
        return true;
      }
    }
    return false;
  };

  const LoginForm = styled(Box)({
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiTextField-root": { margin: "10px" },
  });

  return (
    <LoginForm
      component="form"
      id="loginForm"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Paper
        elevation={12}
        sx={{ py: "50px", px: { xs: "60px", sm: "100px" }, width: "500px" }}
      >
        <Typography>LOGIN</Typography>

        <TextField id="username" name="username" label="Email / Phone" />

        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
        />

        <Stack
          spacing={2}
          m={1}
          direction="row"
          width="100%"
          justifyContent="space-between"
          sx={{ "& .MuiButton-root": { width: "50%", p: "10px 0" } }}
        >
          <Button variant="contained" type="submit">
            Login
          </Button>
          <Button variant="outlined" onClick={() => navigate("/signup")}>
            SignUp
          </Button>
        </Stack>
      </Paper>
    </LoginForm>
  );
};
