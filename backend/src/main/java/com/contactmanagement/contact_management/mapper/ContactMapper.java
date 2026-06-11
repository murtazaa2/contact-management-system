package com.contactmanagement.contact_management.mapper;

        import com.contactmanagement.contact_management.dto.ContactDTO;
        import com.contactmanagement.contact_management.entity.Contact;

public class ContactMapper {

    public static ContactDTO toDTO(Contact contact) {
        return new ContactDTO(
                contact.getId(),
                contact.getFirstName(),
                contact.getLastName(),
                contact.getTitle(),
                contact.getEmail(),
                contact.getPhone()
        );
    }

    public static Contact toEntity(ContactDTO dto) {
        Contact contact = new Contact();

        contact.setId(dto.getId());
        contact.setFirstName(dto.getFirstName());
        contact.setLastName(dto.getLastName());
        contact.setTitle(dto.getTitle());
        contact.setEmail(dto.getEmail());
        contact.setPhone(dto.getPhone());

        return contact;
    }
}