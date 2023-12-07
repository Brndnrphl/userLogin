# Simple User Login

This project is a user login system built using Express.js, SQLite3, and bcrypt for password hashing. It includes the following key components:

- **Dependencies**:

  - Express.js for handling HTTP requests and routing
  - SQLite3 for database management
  - bcrypt for secure password hashing

- **File Structure**:

  - The main server logic is contained in `index.js`
  - HTML templates for login, registration, success, and failure pages are stored in the `views` directory
  - Static assets such as CSS styles are stored in the [static](file:///home/brandon/code/login/index.js#15%2C5-15%2C5) directory

- **Functionality**:

  - Users can register with an email and password, which is securely hashed using bcrypt before being stored in the SQLite database
  - Registered users can then log in using their credentials, with password verification handled securely using bcrypt

- **Security Measures**:

  - Password strength requirements are enforced on the client side using JavaScript in `views/register.html` and `views/pwdCheck.js`
  - Passwords are securely hashed using bcrypt before being stored in the database

- **Usage**:

  - To run the project, execute `npm install` to install the required dependencies, then start the server using `npm start`

- **Additional Notes**:
  - The project uses EJS as the templating engine for rendering dynamic HTML pages
  - The project includes a basic CSS file for styling the login and registration forms
