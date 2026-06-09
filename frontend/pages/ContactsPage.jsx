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



import { useState, useEffect } from "react";

import Navbar from "../components/common/NavBAr";

import SearchBar from "../components/contacts/SearchBar";
import ContactForm from "../components/contacts/ContactForm";
import ContactTable from "../components/contacts/ContactTable";
import Pagination from "../components/contacts/Pagination";
import EditContactModal from "../components/contacts/EditContactModal";
import ViewContactModal from "../components/contacts/ViewContactModal";
import {
  getAllContacts,
  createContact,
  deleteContact as deleteContactAPI,
  updateContact as updateContactAPI
} from "../services/contactService";

function ContactsPage() {

  const [searchTerm, setSearchTerm] = useState("");

  const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetchContacts();
    }, []);

   const fetchContacts = async () => {
    try {
        setLoading(true);
        const response = await getAllContacts();
        setContacts(response.data);
    } catch (error) {

        console.error("Error fetching contacts:", error);

    } finally {

        setLoading(false);
        }
};

 const [showEditModal, setShowEditModal] = useState(false);

 const [selectedContact, setSelectedContact] = useState(null);

 const [showViewModal, setShowViewModal] = useState(false);

 const [viewContact, setViewContact] = useState(null);

 const [currentPage, setCurrentPage] = useState(1);
 
 const [loading, setLoading] = useState(true);

 const [sortOption, setSortOption] = useState("");

 const [message, setMessage] = useState("");

 const contactsPerPage = 5;

  const addContact = async (newContact) => {

  try {

    await createContact(newContact);

    fetchContacts();

    setMessage("Contact added successfully!");

    setTimeout(() => {
        setMessage("");
    }, 3000);

  } catch (error) {

    console.error("Error adding contact:", error);

  }

};

const deleteContact = async (id) => {

  const confirmed = window.confirm(
    "Are you sure you want to delete this contact?"
  );

  if (!confirmed) {
    return;
  }

  try {

    await deleteContactAPI(id);

    fetchContacts();

    setMessage("Contact deleted successfully!");


    setTimeout(() => {
        setMessage("");
    }, 3000);

  } catch (error) {

    console.error("Error deleting contact:", error);

  }
};

 const filteredContacts = contacts.filter((contact) => {

  const search = searchTerm.toLowerCase();

  return (
    contact.firstName?.toLowerCase().includes(search) ||
    contact.lastName?.toLowerCase().includes(search) ||
    contact.email?.toLowerCase().includes(search) ||
    contact.phone?.toLowerCase().includes(search)
  );

});

const sortedContacts = [...filteredContacts];

  if (sortOption === "firstNameAsc") {
  sortedContacts.sort((a, b) =>
    a.firstName.localeCompare(b.firstName)
  );
}

if (sortOption === "firstNameDesc") {
  sortedContacts.sort((a, b) =>
    b.firstName.localeCompare(a.firstName)
  );
}

if (sortOption === "emailAsc") {
  sortedContacts.sort((a, b) =>
    a.email.localeCompare(b.email)
  );
}

if (sortOption === "emailDesc") {
  sortedContacts.sort((a, b) =>
    b.email.localeCompare(a.email)
  );
}

  const indexOfLastContact =
  currentPage * contactsPerPage;

 const indexOfFirstContact =
 indexOfLastContact - contactsPerPage;

 const currentContacts =
   sortedContacts.slice(
     indexOfFirstContact,
     indexOfLastContact
  );

const totalPages =
   Math.ceil(
     sortedContacts.length /
     contactsPerPage
  );

  const handleEditClick = (contact) => {
  setSelectedContact(contact);
  setShowEditModal(true);
};

 const handleUpdateContact = async (updatedContact) => {

  try {

    await updateContactAPI(
      updatedContact.id,
      updatedContact
    );

    fetchContacts();

    setShowEditModal(false);

    setMessage("Contact updated successfully!");

    setTimeout(() => {
        setMessage("");
    }, 3000);

  } catch (error) {

    console.error(
      "Error updating contact:",
      error
    );

  }

};

 const handleViewContact = (contact) => {
  setViewContact(contact);
  setShowViewModal(true);
};

console.log("Contacts State:", contacts);

  return (
    <>

      <Navbar />

      <div className="container mt-4">

        <h2 className="mb-4">
          Contact Management
        </h2>


        {message && (
            <div className="alert alert-success">
                {message}
            </div>
        )}


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

        <div className="mb-3">
  <select
  className="form-select"
  value={sortOption}
  onChange={(e) => {
    setSortOption(e.target.value);
    setCurrentPage(1);
  }}
>
    <option value="">Sort By</option>
    <option value="firstNameAsc">First Name (A-Z)</option>
    <option value="firstNameDesc">First Name (Z-A)</option>
    <option value="emailAsc">Email (A-Z)</option>
    <option value="emailDesc">Email (Z-A)</option>
  </select>
</div>  

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

      {loading ? (

        <div className="alert alert-secondary">
            Loading contacts...
        </div>

        ) : currentContacts.length > 0 ? (

    <ContactTable
        contacts={currentContacts}
        onDelete={deleteContact}
        onEdit={handleEditClick}
        onView={handleViewContact}
    />

    ) : (

    <div className="alert alert-info">
        No contacts found.
    </div>

    )}

        <p>Current Page: {currentPage}</p>
        <p>Total Pages: {totalPages}</p>
        <p>Current Contacts: {sortedContacts.length}</p>

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


