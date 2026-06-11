package com.contactmanagement.contact_management.repository;

        import com.contactmanagement.contact_management.entity.User;
        import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
}