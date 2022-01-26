import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FormikControl from "src/components/formik/FormikControl";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid Email Format")
      .required("Required Field"),

    password: Yup.string()
      .min(6, "6 characters minimum")
      .required("Required Field"),
  });

  const submitFunction = (data: any) => {
    console.log(data);
    navigate("/dashboard/ads");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitFunction}
        >
          <Form>
            <FormikControl
              control="input"
              name="email"
              type="email"
              label={"email address"}
            />
            <FormikControl
              margin="normal"
              control="input"
              name="password"
              type="password"
              label={"password"}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {"Sign In"}
            </Button>
          </Form>
        </Formik>
      </Box>
    </Container>
  );
};

export default SignIn;
