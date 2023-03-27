import { toast, Zoom } from "react-toastify";

// types: info, success, warning, error
export const renderToast = (type, text) => {
  toast.clearWaitingQueue();
  toast[type](text, {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    pauseOnFocusLoss: false,
    transition:Zoom
    });
}