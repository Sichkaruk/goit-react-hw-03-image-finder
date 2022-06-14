import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastMsg = (msg, type) => {
  toast[type](msg, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default toastMsg;
