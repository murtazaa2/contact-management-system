// function ContactTable({
//   contacts,
//   onDelete
// }) {

//   return (

//     <table className="table table-bordered mt-4">

//       <thead>

//         <tr>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Title</th>
//           <th>Email</th>
//           <th>Phone</th>
//           <th>Action</th>
//         </tr>

//       </thead>

//       <tbody>

//         {contacts.map((contact) => (

//           <tr key={contact.id}>

//             <td>{contact.firstName}</td>
//             <td>{contact.lastName}</td>
//             <td>{contact.title}</td>
//             <td>{contact.email}</td>
//             <td>{contact.phone}</td>

//             <td>

//               <button
//                 className="btn btn-danger btn-sm"
//                 onClick={() => onDelete(contact.id)}
//               >
//                 Delete
//               </button>

//             </td>

//           </tr>

//         ))}

//       </tbody>

//     </table>

//   );
// }

// export default ContactTable;



function ContactTable({
  contacts,
  onDelete,
  onEdit,
  onView,
}) {
  return (
    <table className="table table-bordered">

      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>

        {contacts.map((contact) => (
          <tr key={contact.id}>

            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>

            <td>

              <button
                className="btn btn-info btn-sm me-2"
                onClick={() => onView(contact)}
              >
                View
              </button>

              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => onEdit(contact)}
              >
                Edit
              </button>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(contact.id)}
              >
                Delete
              </button>

            </td>

          </tr>
        ))}

      </tbody>

    </table>
  );
}

export default ContactTable;