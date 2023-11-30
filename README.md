# The Library - Online Library Management System

The Library is an online library management website where users can explore and find books across different categories.

## Live Site

Explore The Library: [The Library](https://the-library-0.netlify.app/)

## Repository Links

-  [Client Side Repository](https://github.com/mspsohan/library-managements-client)
-  [Server Side Repository](https://github.com/mspsohan/library-management-server)

## Features and Functionalities

### Home Page

-  **Active Routing System:** The navbar employs an active routing system, indicating the active page with a distinct appearance.

-  **Dark/Light Theme Toggle:** Users can switch between dark and light themes using the toggle button on the navbar.

-  **User Information:** The right side of the navbar displays user information if logged in; otherwise, a login button is shown.

-  **Swiper Slider Banner:** The banner section features a swiper slider that navigates to different sections.

-  **Categories Books:** Four categories of books are displayed below the slider, each with an image, category name, and a "Show More Books" button. Clicking this button redirects users to a page with books from the selected category. Logged-in users are directly taken to the book page, while non-logged-in users are redirected to the login page.

-  **About Us and Testimonial Sections:** Additional sections provide information about the website and user testimonials.

### Add Book Page

-  **Add Book Functionality:** Valid users can add books to the library.

### All Books Page

-  **View All Books:** Valid users can view all books, filter by category and availability.

### Borrowed Book Functionality

-  **Borrow and Return Books:** Users can borrow books, and borrowed books are stored on a dedicated page. Upon returning a book, the quantity in the main library increases.

### Authentication

-  **JWT Token:** User authentication is implemented using JSON Web Tokens. Access to specific routes, such as All Books and Add Book, requires a valid token.

### Registration and Login

-  **User Registration:** Registration requires full name, profile image, valid email, and a password meeting specified criteria.

-  **Toggle Button:** The registration and login forms include a toggle button for easy navigation between the login and registration pages.

### Database and Server

-  **MongoDB:** Data is stored using MongoDB.

-  **Express.js Server:** API handling is done on an Express.js server.

<!-- ### Website Name: [The Library](https://the-library-msp.netlify.app)

### website Live Link: https://the-library-msp.netlify.app/

### Features and Functionalities of This Website:

This is an Online Library management website where people can find different categoties of book.

### Home Page:

-  In this website's navbar, there is an active routing system. For example, if I go to the "Home" route, the "Home" button will appear differently compared to others, indicating that it's the active page.
-  on navbar also have a dark or light theme toggle button.

-  On the right side of the navbar, there will be user information displayed if the user is logged in. If the user isn't logged in, a login button will be shown by default.

-  The banner section is not static; it's a swipper slider banner that can navigate to click on the navigation button.

-  Below the Slider, there are 4 Categoryis book, each featuring an image, category name, and a "Show More Book" button. If user click the "Show More Book" button, it will redirect them to the anothe page where will be founded same categoris book. If the user is logged in, they will be taken directly to the book page. If the user is not logged in, they will be redirected to the login page.
-  bellow the category section there is about us section and testimoinal section.

-  Website has add book page, where the valid use can add book.
-  There is also a all book page where valid user can see all book and can filter out by category and availability.
-  There is anothe functionality , people can borrow a book. borrow book will store on borrowed book page. when borrwrd a book the quantity will reduce from the main library. and on the borrowed book page user can return the book. after rfeturn book the quantity of book will increased.
-  After logging in, users will be redirected to the page they originally intended to visit.

-  In the registration page, there are four fields to fill out: full name, profile image, valid email, and password. Users must complete all the fields; otherwise, they will receive an error message. Additionally, if the user doesn't meet the password criteria, such as having a minimum of six characters with at least one capital letter and one special character, they will see an error message below the password field.

-  On the registration and login forms, there is a toggle button. If a new user clicks it, the login page will redirect to the registration page. If a user already has an account, clicking the toggle button will redirect to the login page.
-  To Authenticate a user JWT Token is implement. Without token user cant access the All Book and Add book route.
-  Using Mongodb Database To store all the data of this website, and Api handlilng on express.js server.

#### Thank you to read this out. -->
