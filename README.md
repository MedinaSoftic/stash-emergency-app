# stash-emergency-app
Unit 1 end of unit project 

This project is currently live here: https://stash-emergency.netlify.app/ 
During my time at LaunchCode, I was tasked with developing a single-page application (SPA) using only front-end technologies and JavaScript. I created a user-friendly platform designed to centralize critical resources and information from government and nonprofit organizations, aimed at supporting individuals in the U.S. before and after natural disasters. (This project is still being updated to allow for better features and information).

------------------
# STASH Emergency
Unit 2 end of unit project 
STASH Emergency is a full-stack emergency preparedness platform designed to help individuals prepare for and respond to natural disasters such as fires, floods, and electrical emergencies. Users can register and log in securely, submit detailed emergency reports, and manage them through a personal dashboard. The app also provides a public view of all submitted reports, giving community members insight into ongoing events in various locations. STASH information and reporting is centralized and accessible hub for all.

-----------------
Technologies Used

Frontend
React (Vite), JavaScript, React Router, Axios, React Icons, CSS

Backend
Java, Spring Boot, Spring Data JPA, MySQL, JWT (JSON Web Token) for authentication, BCrypt for password hashing

--------------------------------
Installation Steps (Local Setup)

Prerequisites
[Node.js](https://nodejs.org/)
[Java JDK 17+](https://adoptium.net/)
[MySQL Server](https://dev.mysql.com/downloads/)
[Postman](https://www.postman.com/) (for testing APIs, optional)

1. Clone the Repo

git clone https://github.com/MedinaSoftic/stash-emergency-app.git
--
2. Setup Backend
cd backend
Set up MySQL database named stash_db

In application.properties, configure:

spring.datasource.username=your_username
spring.datasource.password=your_password

Run the backend using:
./mvnw spring-boot:run
--
3. Setup Frontend
cd vite-stash-emergency-app
npm install
npm run dev
Access the app at: http://localhost:3000

-----
Links

Wireframes - https://www.figma.com/board/tNBeSuydtjzC8Z6J6dBbLs/Design-for-STASH-emergency?node-id=0-1&p=f&t=uYqiGsu0QRLCxqB8-0

ERD (Entity Relationship Diagram) - https://docs.google.com/document/d/1V_kej_wVoosAhWBOxSD7GTT3WQGIGJWdghS7EzbKdag/edit?usp=sharing

------------------------------
Future Features & Known Issues

Future Enhancements

Enable image uploads with each report

Add filtering by type or zip code

Role-based access: admin moderation dashboard

-----------------
Unsolved Problems
Currently no email verification during registration

Basic error handling could be improved for network failures
