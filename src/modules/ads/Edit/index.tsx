import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Tooltip,
  Typography,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Form, Formik } from "formik";
import { useState } from "react";
import FormikControl from "src/components/formik/FormikControl";
import * as Yup from "yup";

const Edit = () => {
  const [open, setOpen] = useState(false);

  const initialValues = {
    type: "",
    link: "",
    from_time: "",
    to_time: "",
  };

  const validationSchema = Yup.object({
    type: Yup.string().required("Required Field"),
    link: Yup.string().required("Required Field"),
    from_time: Yup.string().required("Required Field"),
    to_time: Yup.string().required("Required Field"),
  });

  const submitFunction = (data: any) => {};

  return (
    <>
      <Tooltip title="Edit" placement="top" arrow>
        <IconButton onClick={() => setOpen(true)}>
          <EditOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: " absolute",
            borderRadius: " 8px",
            top: " 50%",
            left: " 50%",
            transform: " translate(-50%, -50%)",
            width: " 100%",
            maxWidth: " 700px",
            backgroundColor: " #fff",
            padding: " 32px",
            maxHeight: " 95vh",
            overflow: " auto",
          }}
        >
          <div>
            <Typography
              sx={{
                marginBottom: "3rem",
                paddingBottom: "1rem",
                fontWeight: "bold",
                borderBottom: "1px solid #ccc",
              }}
            >
              Edit
            </Typography>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submitFunction}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <FormikControl
                    control="select"
                    options={[
                      { label: "Image", value: "image" },
                      { label: "Video", value: "video" },
                    ]}
                    name="type"
                    type="text"
                    label="Type"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormikControl
                    control="input"
                    name="link"
                    type="text"
                    label="Link"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormikControl
                    control="input"
                    name="from_time"
                    type="date"
                    label="From"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormikControl
                    control="input"
                    name="to_time"
                    type="date"
                    label="To"
                  />
                </Grid>
              </Grid>
              <Box
                sx={{
                  marginTop: "2.5rem",
                  borderTop: "1px solid #ccc",
                  paddingTop: "1rem",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  color="error"
                  onClick={() => setOpen(false)}
                  variant="contained"
                  sx={{ m: 0.5 }}
                >
                  close
                </Button>
                <Button type="submit" variant="contained" sx={{ m: 0.5 }}>
                  Edit
                </Button>
              </Box>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default Edit;
