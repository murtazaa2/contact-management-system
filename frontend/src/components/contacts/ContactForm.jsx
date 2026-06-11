import { useState } from "react";

function ContactForm({ onSave }) {

  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phone: ""
  });

  const handleChange = (event) => {

    setContact({
      ...contact,
      [event.target.name]: event.target.value
    });

  };

  const handleSubmit = (event) => {

    event.preventDefault();

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
          />
        </div>

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
          />
        </div>

        <div className="col-md-12 mb-3">
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="Phone"
            value={contact.phone}
            onChange={handleChange}
          />
        </div>

      </div>

      <button className="btn btn-success">
        Add Contact
      </button>

    </form>
  );
}

export default ContactForm;