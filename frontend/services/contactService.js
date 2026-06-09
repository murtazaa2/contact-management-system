// import axios from "axios";

// import  api from "./api.js";

// export const getAllContacts = () => {
//   return api.get("/api/contacts");
// };

// export const createContact = (contact) => {
//   return api.post("/api/contacts", contact);
// };

// export const getContactById = (id) => {
//   return api.get(`/api/contacts/${id}`);
// };

// export const updateContact = (id, contact) => {
//   return api.put(`/api/contacts/${id}`, contact);
// };

// export const deleteContact = (id) => {
//   return api.delete(`/api/contacts/${id}`);
// };

import api from "./api";

export const getAllContacts = () => {
  return api.get("/api/contacts");
};

export const createContact = (contact) => {
  return api.post("/api/contacts", contact);
};

export const getContactById = (id) => {
  return api.get(`/api/contacts/${id}`);
};

export const updateContact = (id, contact) => {
  return api.put(`/api/contacts/${id}`, contact);
};

export const deleteContact = (id) => {
  return api.delete(`/api/contacts/${id}`);
};