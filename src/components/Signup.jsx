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
  Grid,
} from "@mui/material";

export const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());

    const studentAccount = localStorage.getItem("studentAccount")
      ? JSON.parse(localStorage.getItem("studentAccount"))
      : [];

    for (let i = 0; i < studentAccount.length; i += 1) {
      if (
        studentAccount[i].email === value.email ||
        studentAccount[i].phone === value.phone
      ) {
        console.log("User Already Registered!");
        return false;
      }
    }
    studentAccount.push(value);
    localStorage.setItem("studentAccount", JSON.stringify(studentAccount));
    navigate("/login");
    return true;
  };

  const SignupForm = styled(Box)({
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
    "& .MuiTextField-root": { margin: "10px" },
  });

  return (
    <SignupForm
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Paper
        elevation={12}
        sx={{
          py: "80px",
          px: { xs: "40px", sm: "60px" },
          width: "800px",
          alignContent: "center",
          overflow: "scroll",
        }}
      >
        <Typography>SIGNUP</Typography>

        <Grid container justifyContent={"space-between"}>
          <Grid item container sm={5.8}>
            <TextField id="email" name="email" label="Email" />
            <TextField id="phone" name="phone" label="Phone" type="number" />
            <TextField id="pass" name="pass" label="Password" type="password" />
            <TextField
              id="confPass"
              name="confPass"
              label="Confirm Password"
              type="password"
            />
          </Grid>

          <Grid item container sm={5.8}>
            <TextField id="fullName" name="fullName" label="Full Name" />
            <TextField id="class" name="class" label="Class" />
            <TextField id="studentId" name="studentId" label="Student ID" />
            <Stack
              spacing={2}
              m={1}
              direction="row"
              width="100%"
              justifyContent="space-between"
              sx={{ "& .MuiButton-root": { width: "50%", p: "10px 0" } }}
            >
              <Button variant="outlined" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button variant="contained" type="submit">
                SignUp
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </SignupForm>
  );
};
