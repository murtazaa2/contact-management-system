function ViewContactModal({
  show,
  contact,
  onClose,
}) {

  if (!show || !contact) return null;

  return (
    <div className="modal d-block">
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5>Contact Details</h5>
          </div>

          <div className="modal-body">

            <p>
              <strong>First Name:</strong> {contact.firstName}
            </p>

            <p>
              <strong>Last Name:</strong> {contact.lastName}
            </p>

            <p>
              <strong>Title:</strong> {contact.title}
            </p>

            <p>
              <strong>Email:</strong> {contact.email}
            </p>

            <p>
              <strong>Phone:</strong> {contact.phone}
            </p>

          </div>

          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ViewContactModal;