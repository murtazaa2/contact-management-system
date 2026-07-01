Contact Management System
Project Documentation
Java Spring Boot + React.js
1. Introduction
The Contact Management System is a web-based application developed using Java Spring Boot and React.js. The system allows users to securely manage their contacts through a modern and user-friendly interface. Authentication is implemented using JWT (JSON Web Tokens) to ensure secure access to application resources.
2. Project Objectives
- Provide secure user authentication and authorization.
- Manage contacts efficiently.
- Implement CRUD operations (Create, Read, Update, Delete).
- Apply Full Stack Development concepts using Java and React.
3. Technologies Used
Backend:
• Java
• Spring Boot
• Spring Security
• JWT Authentication
• Spring Data JPA
• Hibernate
• MySQL

Frontend:
• React.js
• Axios
• React Router
• Bootstrap

Tools:
• IntelliJ IDEA
• Visual Studio Code
• MySQL Workbench
• Postman
• Git & GitHub
4. System Features
• User Registration
• User Login
• JWT-Based Authentication
• View Contacts
• Add Contacts
• Edit Contacts
• Delete Contacts
• Protected Routes
5. System Architecture
React Frontend
↓
Spring Boot REST API
↓
Service Layer
↓
Repository Layer
↓
MySQL Database
6. Database Design
Users Table:
- id
- username
- password

Contacts Table:
- id
- first_name
- last_name
- title
- email
- phone
7. API Endpoints
Authentication:
POST /api/auth/register
POST /api/auth/login

Contacts:
GET /api/contacts
GET /api/contacts/{id}
POST /api/contacts
PUT /api/contacts/{id}
DELETE /api/contacts/{id}
8. Testing
Unit testing was performed using JUnit 5 and Mockito. Test cases were created for ContactService CRUD operations.
9. Future Enhancements
• Contact Search
• Pagination
• Contact Categories
• Profile Pictures
• Email Integration
10. Conclusion
The Contact Management System successfully demonstrates Full Stack Web Development using Java Spring Boot and React.js. The application provides secure authentication and efficient contact management while following modern software development practices.
 11. Screenshots
Screenshot 1: Registration Page
<img width="1040" height="786" alt="image" src="https://github.com/user-attachments/assets/55b879a3-c69f-4763-8c24-867bda7f720b" />

Screenshot 2: Login Page
<img width="980" height="676" alt="image" src="https://github.com/user-attachments/assets/9baa9b48-cb5a-4711-a8a3-0110ae54b851" />

Screenshot 3: Dashboard / Home Page
<img width="1822" height="442" alt="image" src="https://github.com/user-attachments/assets/025e24c1-9651-4731-956b-1e754ceb4d56" />

Screenshot 4: Contact List Page
<img width="1753" height="625" alt="image" src="https://github.com/user-attachments/assets/e7f5be49-fcce-4e89-aad7-d6f5d3d17d99" />

Screenshot 5: Add Contact Page
<img width="1751" height="502" alt="image" src="https://github.com/user-attachments/assets/23e6ecf2-2e3c-438b-a608-0ea4074a897b" />

Screenshot 6: Edit Contact Page
<img width="923" height="662" alt="image" src="https://github.com/user-attachments/assets/49b3f7d9-2911-4915-b607-5dcad418de52" />
<img width="1645" height="122" alt="image" src="https://github.com/user-attachments/assets/7bf89845-6911-48e3-93b7-8eb972876ece" />

screenshot 7 : View Contact Information
<img width="655" height="466" alt="image" src="https://github.com/user-attachments/assets/99fe5e5d-6707-47ad-a0c2-1cc9e5ff06cf" />

Screenshot : Delete Contact Confirmation
Deleted Ali Khan Contact
<img width="1642" height="362" alt="image" src="https://github.com/user-attachments/assets/60765ff4-c870-409b-8bc4-8dc00468fc53" />

Screenshot : Profile Information
<img width="1712" height="466" alt="image" src="https://github.com/user-attachments/assets/93c8ce00-d9a0-42ea-8171-0f81a2181c71" />

