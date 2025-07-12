import Swal from "sweetalert2";

const SweetAlert = (status, title) => {
    Swal.fire({
        icon: `${status}`,
        title: `${title}`,
        showConfirmButton: false,
        timer: 3000
    });
};

export default SweetAlert;