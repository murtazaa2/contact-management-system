//package com.contactmanagement.contact_management.service;
//
//import com.contactmanagement.contact_management.entity.Contact;
//import com.contactmanagement.contact_management.repository.ContactRepository;
//
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.junit.jupiter.MockitoExtension;
//
//import java.util.Arrays;
//import java.util.List;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.mockito.Mockito.*;
//
//@ExtendWith(MockitoExtension.class)
//class ContactServiceTest {
//
//    @Mock
//    private ContactRepository contactRepository;
//
//    @InjectMocks
//    private ContactService contactService;
//
//    @Test
//    void testGetAllContacts() {
//
//        Contact c1 = new Contact(
//                1L,
//                "Mohammad",
//                "Hamza",
//                "Manager",
//                "hamza@test.com",
//                "123456789"
//        );
//
//        Contact c2 = new Contact(
//                2L,
//                "Mohib",
//                "Ahmed",
//                "Developer",
//                "mohib@test.com",
//                "987654321"
//        );
//
//        when(contactRepository.findAll())
//                .thenReturn(Arrays.asList(c1, c2));
//
//        List<Contact> contacts =
//                contactService.getAllContacts();
//
//        assertEquals(2, contacts.size());
//
//        verify(contactRepository, times(1))
//                .findAll();
//    }
//}


package com.contactmanagement.contact_management.service;

import com.contactmanagement.contact_management.entity.Contact;
import com.contactmanagement.contact_management.repository.ContactRepository;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertNull;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
class ContactServiceTest {

    @Mock
    private ContactRepository contactRepository;

    @InjectMocks
    private ContactService contactService;

    @Test
    void testGetAllContacts() {

        Contact c1 = new Contact(
                1L,
                "Mohammad",
                "Hamza",
                "Manager",
                "hamza@test.com",
                "123456789"
        );

        Contact c2 = new Contact(
                2L,
                "Mohib",
                "Ahmed",
                "Developer",
                "mohib@test.com",
                "987654321"
        );

        when(contactRepository.findAll())
                .thenReturn(Arrays.asList(c1, c2));

        List<Contact> contacts =
                contactService.getAllContacts();

        assertEquals(2, contacts.size());

        verify(contactRepository, times(1))
                .findAll();
    }

    @Test
    void testSaveContact() {

        Contact contact = new Contact(
                1L,
                "Ali",
                "Khan",
                "Developer",
                "ali@test.com",
                "123456789"
        );

        when(contactRepository.save(contact))
                .thenReturn(contact);

        Contact savedContact =
                contactService.saveContact(contact);

        assertEquals(
                "Ali",
                savedContact.getFirstName()
        );

        verify(contactRepository, times(1))
                .save(contact);
    }

    @Test
    void testGetContactById() {

        Contact contact = new Contact(
                1L,
                "Ali",
                "Khan",
                "Developer",
                "ali@test.com",
                "123456789"
        );

        when(contactRepository.findById(1L))
                .thenReturn(Optional.of(contact));

        Contact foundContact =
                contactService.getContactById(1L);

        assertEquals(
                "Ali",
                foundContact.getFirstName()
        );

        verify(contactRepository, times(1))
                .findById(1L);
    }

    @Test
    void testDeleteContact() {

        Long contactId = 1L;

        contactService.deleteContact(contactId);

        verify(contactRepository, times(1))
                .deleteById(contactId);
    }

    @Test
    void testUpdateContact() {

        Contact existingContact = new Contact(
                1L,
                "Ali",
                "Khan",
                "Developer",
                "ali@test.com",
                "123456789"
        );

        Contact updatedContact = new Contact(
                1L,
                "Ahmed",
                "Raza",
                "Senior Developer",
                "ahmed@test.com",
                "987654321"
        );

        when(contactRepository.findById(1L))
                .thenReturn(java.util.Optional.of(existingContact));

        when(contactRepository.save(existingContact))
                .thenReturn(existingContact);

        Contact result =
                contactService.updateContact(
                        1L,
                        updatedContact
                );

        assertEquals(
                "Ahmed",
                result.getFirstName()
        );

        assertEquals(
                "Raza",
                result.getLastName()
        );

        assertEquals(
                "Senior Developer",
                result.getTitle()
        );

        assertEquals(
                "ahmed@test.com",
                result.getEmail()
        );

        assertEquals(
                "987654321",
                result.getPhone()
        );

        verify(contactRepository, times(1))
                .findById(1L);

        verify(contactRepository, times(1))
                .save(existingContact);
    }

    @Test
    void testGetContactById_NotFound() {

        when(contactRepository.findById(99L))
                .thenReturn(java.util.Optional.empty());

        Contact contact =
                contactService.getContactById(99L);

        assertNull(contact);

        verify(contactRepository, times(1))
                .findById(99L);
    }

    @Test
    void testUpdateContact_NotFound() {

        Contact updatedContact = new Contact(
                99L,
                "Ahmed",
                "Raza",
                "Senior Developer",
                "ahmed@test.com",
                "987654321"
        );

        when(contactRepository.findById(99L))
                .thenReturn(java.util.Optional.empty());

        Contact result =
                contactService.updateContact(
                        99L,
                        updatedContact
                );

        assertNull(result);

        verify(contactRepository, times(1))
                .findById(99L);

        verify(contactRepository, never())
                .save(any(Contact.class));
    }
}