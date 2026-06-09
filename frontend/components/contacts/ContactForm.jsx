import { useState } from "react";

function ContactForm({ onSave }) {

  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phone: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {

    setContact({
      ...contact,
      [event.target.name]: event.target.value
    });

  };

  const handleSubmit = (event) => {

  event.preventDefault();

  let validationErrors = {};

  if (!contact.firstName.trim()) {
    validationErrors.firstName = "First Name is required";
  }

 if (!contact.email.trim()) {

  validationErrors.email = "Email is required";

} else if (
  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)
) {

  validationErrors.email = "Please enter a valid email address";

}

  if (!contact.phone.trim()) {
    validationErrors.phone = "Phone is required";
  }

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setErrors({});

  onSave(contact);

  setContact({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phone: ""
  });
};

  return (
    <form onSubmit={handleSubmit}>

      <div className="row">

        <div className="col-md-6 mb-3">
          <input
            type="text"
            name="firstName"
            className="form-control"
            placeholder="First Name"
            value={contact.firstName}
            onChange={handleChange}
            required
          />
        </div>

        {errors.firstName && (
            <div className="text-danger mt-1">
                {errors.firstName}
            </div>
            )}

        <div className="col-md-6 mb-3">
          <input
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Last Name"
            value={contact.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6 mb-3">
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Title"
            value={contact.title}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6 mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={contact.email}
            onChange={handleChange}
            required
          />
        </div>

        {errors.email && (
            <div className="text-danger mt-1">
                {errors.email}
            </div>
            )}

        <div className="col-md-12 mb-3">
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="Phone"
            value={contact.phone}
            onChange={handleChange}
            required
          />
        </div>

        {errors.phone && (
            <div className="text-danger mt-1">
                {errors.phone}
            </div>
            )}

      </div>
        <button className="btn btn-success">
        Add Contact
      </button>

    </form>
  );
}

export default ContactForm;