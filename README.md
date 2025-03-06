# Event Ticketing App 🚀

## Overview
This project is a web-based platform where users can register, log in and purchase tickets for various events. It features multiple pages, including an events page for browsing and booking tickets. 

Administrators have additional privileges, allowing them to manage events (add, edit, delete) and oversee user accounts. The system ensures secure authentication and role-based access control using JWT for efficient and protected user sessions.

---


## Features
- **User Management**: Complete CRUD functionality for managing user data
- **Event Management**: Admins can add, edit, and delete events
- **Secure Authentication**: JWT-based authentication and role-based access control
- **Database Connectivity**: Persistent data storage using MySQL
- **REST API**: Implementation of a RESTful controller using Spring Boot
- **Layered Architecture**: Organized into DAO, Repository, Service and Controller layers

---

## Technologies Used
- **Backend**: Java, Spring Boot, JPA
- **Database**: MySQL
- **Frontend**: ReactJS, HTML, CSS

---

## Setup Instructions
1. Clone the repository
2. Configure the database connection in `application.properties`
3. Run the Spring Boot application
4. Start the React frontend
5. Access the application in your browser

---

![Exemplu de imagine](/register.png)
![Exemplu de imagine](/events.png)

#As a user, you cannot access **Events Management** or **Users Management**, as shown in the image below:
![Exemplu de imagine](/user.png)
![Exemplu de imagine](/events_management.png)
