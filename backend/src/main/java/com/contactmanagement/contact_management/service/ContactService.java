package com.contactmanagement.contact_management.service;

import com.contactmanagement.contact_management.entity.Contact;
import com.contactmanagement.contact_management.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

    @Service
    public class ContactService {

        @Autowired
        private ContactRepository contactRepository;

        public List<Contact> getAllContacts() {
            return contactRepository.findAll();
        }

        public Contact saveContact(Contact contact) {
            return contactRepository.save(contact);
        }

        public Contact getContactById(Long id) {
            return contactRepository.findById(id).orElse(null);
        }

        public Contact updateContact(Long id, Contact updatedContact) {
            Contact contact = contactRepository.findById(id).orElse(null);

            if (contact != null) {
                contact.setFirstName(updatedContact.getFirstName());
                contact.setLastName(updatedContact.getLastName());
                contact.setTitle(updatedContact.getTitle());
                contact.setEmail(updatedContact.getEmail());
                contact.setPhone(updatedContact.getPhone());

                return contactRepository.save(contact);
            }

            return null;
        }

        public void deleteContact(Long id) {
            contactRepository.deleteById(id);
        }
    }