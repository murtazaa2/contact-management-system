import { useState } from "react";

function ChangePasswordModal({
  show,
  onClose,
}) {
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setPasswords({
      ...passwords,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Password Changed Successfully");

    onClose();
  };

  if (!show) return null;

  return (
    <div className="modal d-block">

      <div className="modal-dialog">

        <div className="modal-content">

          <div className="modal-header">
            <h5>Change Password</h5>
          </div>

          <div className="modal-body">

            <form onSubmit={handleSubmit}>

              <input
                type="password"
                name="oldPassword"
                className="form-control mb-2"
                placeholder="Current Password"
                onChange={handleChange}
              />

              <input
                type="password"
                name="newPassword"
                className="form-control mb-2"
                placeholder="New Password"
                onChange={handleChange}
              />

              <input
                type="password"
                name="confirmPassword"
                className="form-control mb-3"
                placeholder="Confirm Password"
                onChange={handleChange}
              />

              <button
                type="submit"
                className="btn btn-primary me-2"
              >
                Save
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ChangePasswordModal;