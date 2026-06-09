package com.contactmanagement.contact_management.repository;

        import com.contactmanagement.contact_management.entity.Contact;
        import org.springframework.data.jpa.repository.JpaRepository;
        import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
}