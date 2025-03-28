# Login ReqRes

## Overview
This project is a simple login authentication system using the ReqRes API. It allows users to enter their credentials and receive a response indicating whether the login was successful or not. This project is built using **React.js**.

## Features
- User authentication using the [ReqRes API](https://reqres.in/)
- Validates user credentials
- Displays success or failure messages
- Simple and responsive UI

## Live Demo
[Login ReqRes](https://login-users-reqres.netlify.app/)

## How to Use
1. Clone the repository:
   ```bash
   git clone https://github.com/vishnukvvr/login-reqres.git
   ```
2. Open the `index.html` file in a browser.
3. Enter a valid email and password (e.g., use test credentials from ReqRes API: `eve.holt@reqres.in` and `cityslicka`).
4. Click the login button.
5. View the success or failure response on the screen.

## API Reference
- **POST** `https://reqres.in/api/login`
  - Request Body:
    ```json
    {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
    }
    ```
  - Success Response:
    ```json
    {
      "token": "QpwL5tke4Pnpja7X4"
    }
    ```
  - Failure Response:
    ```json
    {
      "error": "Missing password"
    }
    ```

## Future Enhancements
- Add real-time form validation
- Implement session storage for authentication persistence
- Improve UI with better design and animations

## Author
[Kopperla Vishnu Vardhan Reddy](https://github.com/vishnukvvr)




