// import Navbar from '../components/common/NavBAr';

// function ContactsPage() {
//   return (
//     <>
//       <Navbar />

//       <div className="container mt-4">

//         <h2>Contacts</h2>

//         <p>
//           Contact list will appear here.
//         </p>

//       </div>
//     </>
//   );
// }

// export default ContactsPage;



import { useState } from "react";

import Navbar from "../components/common/NavBAr";

import SearchBar from "../components/contacts/SearchBar";
import ContactForm from "../components/contacts/ContactForm";
import ContactTable from "../components/contacts/ContactTable";
import Pagination from "../components/contacts/Pagination";
import EditContactModal from "../components/contacts/EditContactModal";
import ViewContactModal from "../components/contacts/ViewContactModal";


function ContactsPage() {

  const [searchTerm, setSearchTerm] = useState("");

  const [contacts, setContacts] = useState([
    {
      id: 1,
      firstName: "Ali",
      lastName: "Khan",
      title: "Manager",
      email: "ali@gmail.com",
      phone: "03001234567"
    },
    {
      id: 2,
      firstName: "Ahmed",
      lastName: "Raza",
      title: "Developer",
      email: "ahmed@gmail.com",
      phone: "03111234567"
    },

    {
      id: 3,
      firstName: "Usman",
      lastName: "Ali",
      title: "Engineer",
      email: "usman@gmail.com",
      phone: "03001111111"
    },
    {
      id: 4,
      firstName: "Hamza",
      lastName: "Khan",
      title: "Designer",
      email: "hamza@gmail.com",
      phone: "03002222222"
    },
    {
      id: 5,
      firstName: "Bilal",
      lastName: "Ahmed",
      title: "Tester",
      email: "bilal@gmail.com",
      phone: "03003333333"
    },
    {
      id: 6,
      firstName: "Saad",
      lastName: "Raza",
      title: "Manager",
      email: "saad@gmail.com",
      phone: "03004444444"
    },
    {
      id: 7,
      firstName: "Zain",
      lastName: "Ali",
      title: "Developer",
      email: "zain@gmail.com",
      phone: "03005555555"
    }

    
    
  ]);

 const [showEditModal, setShowEditModal] = useState(false);

 const [selectedContact, setSelectedContact] = useState(null);

 const [showViewModal, setShowViewModal] = useState(false);

 const [viewContact, setViewContact] = useState(null);

 const [currentPage, setCurrentPage] = useState(1);

 const contactsPerPage = 5;

  const addContact = (newContact) => {

    setContacts([
      ...contacts,
      {
        ...newContact,
        id: Date.now()
      }
    ]);

  };

  const deleteContact = (id) => {

    const updatedContacts = contacts.filter(
      contact => contact.id !== id
    );

    setContacts(updatedContacts);

  };

  const filteredContacts = contacts.filter(contact =>
    contact.firstName
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const indexOfLastContact =
  currentPage * contactsPerPage;

 const indexOfFirstContact =
 indexOfLastContact - contactsPerPage;

 const currentContacts =
   filteredContacts.slice(
     indexOfFirstContact,
     indexOfLastContact
  );

 const totalPages =
   Math.ceil(
     filteredContacts.length /
     contactsPerPage
  );

  const handleEditClick = (contact) => {
  setSelectedContact(contact);
  setShowEditModal(true);
};

 const handleUpdateContact = (updatedContact) => {

 const updatedContacts = contacts.map((contact) =>
    contact.id === updatedContact.id
      ? updatedContact
      : contact
  );

  setContacts(updatedContacts);
  setShowEditModal(false);
};

 const handleViewContact = (contact) => {
  setViewContact(contact);
  setShowViewModal(true);
};

  return (
    <>

      <Navbar />

      <div className="container mt-4">

        <h2 className="mb-4">
          Contact Management
        </h2>

        {/* <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        /> */}

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={(value) => {
            setSearchTerm(value);
            setCurrentPage(1);
        }}
        />    

        <div className="mt-4">

          <ContactForm
            onSave={addContact}
          />

        </div>

        {/* { <ContactTable
          contacts={filteredContacts}
          onDelete={deleteContact}
          onEdit={handleEditClick}
          onView={handleViewContact}
        /> } */}
        <p>Total Contacts: {currentContacts.length}</p>

        <ContactTable
        contacts={currentContacts}
        onDelete={deleteContact}
        onEdit={handleEditClick}
        onView={handleViewContact}
        />

        <p>Current Page: {currentPage}</p>
        <p>Total Pages: {totalPages}</p>
        <p>Current Contacts: {currentContacts.length}</p>

        { <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        /> }

        {/* 
        <button
            className="btn btn-primary"
            onClick={() => setCurrentPage(2)}
        >
        Go To Page 2
        </button> */}


        {/* <button
            className="btn btn-outline-primary"
            disabled={currentPage === totalPages}
            onClick={() => {
                console.log("Next clicked");
                onPageChange(currentPage + 1);
            }}
        >
            Next
            </button> */}


        <EditContactModal
        show={showEditModal}
        selectedContact={selectedContact}
        onClose={() => setShowEditModal(false)}
        onUpdate={handleUpdateContact}
        />

        <ViewContactModal
        show={showViewModal}
        contact={viewContact}
        onClose={() => setShowViewModal(false)}
        />

      </div>

    </>
  );
}

export default ContactsPage;


