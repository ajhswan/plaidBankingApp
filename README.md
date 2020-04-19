# Cygnet Login/Authentication app

A full-stack login/authorisation app using MongoDB, Express, Node and React. 
Also uses Redux for state management for React components.

App allows user to:

- Register
- Login 
- Access protected pages only accessible to logged in users
- Log out


## Built With

- Node.js
- Express
- MongoDB
- React

## API Routes

### Register endpoint

/api/users/register

POST

using x-www-form-urlencoded require following fields: 

- {'name': 'Fake Name'}
- {'email': 'name@domain.com'}
- {'password': 'password'}
- {'password2: 'password'}

Checks email if it already exists > if email does not exist and password match saves in DB

returns success status:2000 and retuens json object with users details 

if error it returns status 400 and returns msg with error message

### Login endpoint

/api/users/login

POST

using x-www-form-urlencoded require following fields:

- {'email': 'name@domain.com'}
- {'password': 'password'}

Checks for email in db and compares hashed password

returns success status:200 and returns success true with a authentication token that is stored in localstorage

if error returns status:400 and returns error msg





