import { Button, IconButton, Modal, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Delete = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip title="Delete" placement="top" arrow>
        <IconButton onClick={() => setOpen(true)} color="error">
          <DeleteOutlineIcon />
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
            <Box sx={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>
              <div>
                <ErrorOutlineOutlinedIcon
                  sx={{
                    color: "palette.error.main",
                    fontSize: "5rem",
                    m: "auto",
                  }}
                />
              </div>
              Are you sure you want to delete?
            </Box>
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
                onClick={() => setOpen(false)}
                color="secondary"
                variant="contained"
                sx={{
                  margin: "4px",
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="error"
                sx={{ m: 0.5 }}
              >
                Delete
              </Button>
            </Box>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Delete;
