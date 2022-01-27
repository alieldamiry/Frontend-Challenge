import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toaster: React.FC = () => {
  return (
    <ToastContainer
      position={"top-right"}
      autoClose={5000}
      newestOnTop={true}
    />
  );
};

export default Toaster;
