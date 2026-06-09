import { useState, useEffect } from "react";

function EditContactModal({
  show,
  selectedContact,
  onClose,
  onUpdate,
}) {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (selectedContact) {
      setContact(selectedContact);
    }
  }, [selectedContact]);

  const handleChange = (event) => {
    setContact({
      ...contact,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(contact);
  };

  if (!show) return null;

  return (
    <div className="modal d-block">
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5>Edit Contact</h5>
          </div>

          <div className="modal-body">
            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="firstName"
                className="form-control mb-2"
                value={contact.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />

              <input
                type="text"
                name="lastName"
                className="form-control mb-2"
                value={contact.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />

              <input
                type="text"
                name="title"
                className="form-control mb-2"
                value={contact.title}
                onChange={handleChange}
                placeholder="Title"
              />

              <input
                type="email"
                name="email"
                className="form-control mb-2"
                value={contact.email}
                onChange={handleChange}
                placeholder="Email"
              />

              <input
                type="text"
                name="phone"
                className="form-control mb-2"
                value={contact.phone}
                onChange={handleChange}
                placeholder="Phone"
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

export default EditContactModal;