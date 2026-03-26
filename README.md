# `/users/register` Endpoint Documentation

This document provides details on the `/users/register` endpoint of the backend API.

## Overview

- **Endpoint:** `/users/register`
- **Method:** POST
- **Purpose:** Register a new user by providing personal information and receiving an authentication token.

---

## Request Body

The request body must be sent as JSON and include the following fields:

| Field                     | Type   | Required | Description                                               |
|--------------------------|--------|----------|-----------------------------------------------------------|
| `fullname.firstname`     | string | yes      | User's first name (minimum 3 characters)                  |
| `fullname.lastname`      | string | optional | User's last name (minimum 3 characters if provided)       |
| `email`                  | string | yes      | Valid email address                                       |
| `password`               | string | yes      | Password with at least 6 characters                       |

> **Note:** The `fullname` object must be structured exactly as shown above. Validation is performed using `express-validator`.

### Example Request

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "s3cr3tpass"
}
```

---

## Response

- **201 Created** (Success)
  - Returns a JSON object containing:
    - `token`: JWT authentication token for the new user
    - `user`: The newly created user object (password omitted)

- **400 Bad Request** (Validation errors)
  - Returns JSON with an `errors` array describing the validation failures.

- **500 Internal Server Error** (Server-side error)
  - Indicates an unexpected error occurred during registration.

### Example Success Response

```json
{
  "token": "<jwt-token>",
  "user": {
    "_id": "60f7a8ba2f8fb814c89e2d12",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

---

## Notes

- Passwords are hashed before storage using bcrypt.
- A JWT token is generated using the `JWT_SECRET` environment variable.
- Ensure environment variables and database connections are configured before using this endpoint.

---

## `/users/login` Endpoint Documentation

This section describes the `/users/login` endpoint used to authenticate existing users and retrieve a JWT token.

### Overview

- **Endpoint:** `/users/login`
- **Method:** POST
- **Purpose:** Authenticate a user with email and password and return an authentication token.

---

### Request Body

The request body must be sent as JSON and include the following fields:

| Field      | Type   | Required | Description                        |
|------------|--------|----------|------------------------------------|
| `email`    | string | yes      | Registered email address           |
| `password` | string | yes      | User's password (minimum 6 chars)  |

> **Note:** Validation is performed using `express-validator`.

#### Example Request

```json
{
  "email": "john.doe@example.com",
  "password": "s3cr3tpass"
}
```

---

### Response

- **200 OK** (Success)
  - Returns a JSON object containing:
    - `token`: JWT authentication token for the user
    - `user`: The authenticated user object (password omitted)

- **400 Bad Request** (Validation errors or incorrect credentials)
  - Returns JSON with an `errors` array describing the failure or a message indicating invalid credentials.

- **500 Internal Server Error** (Server-side error)
  - Indicates an unexpected error occurred during login.

#### Example Success Response

```json
{
  "token": "<jwt-token>",
  "user": {
    "_id": "60f7a8ba2f8fb814c89e2d12",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

---

### Notes

- Passwords are compared using bcrypt's `compare` function.
- A JWT token is generated using the `JWT_SECRET` environment variable on successful authentication.
- Ensure environment variables and database connections are configured before using this endpoint.

---

## `/users/profile` Endpoint Documentation

### Overview

- **Endpoint:** `/users/profile`
- **Method:** GET
- **Purpose:** Return the authenticated user's profile data.
- **Auth:** Required (JWT token in cookie or Authorization header)

---

### Response

- **200 OK** (Success)
  - Returns the user profile object from `req.user`.

- **401 Unauthorized** (No token or invalid/blacklisted token)
  - Returns `{ message: 'Authentication required' }` or similar.

- **500 Internal Server Error** (Server-side error)

#### Example Success Response

```json
{
  "_id": "60f7a8ba2f8fb814c89e2d12",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

---

## `/users/logout` Endpoint Documentation

### Overview

- **Endpoint:** `/users/logout`
- **Method:** GET
- **Purpose:** Invalidate the current JWT token and clear cookie.
- **Auth:** Required (JWT token in cookie or Authorization header)

---

### Behavior

- Clears `token` cookie from response.
- Stores current token in the blacklist collection (`blackListToken`).

### Response

- **200 OK** (Success)
  - `{ "message": "Logged out successfully" }`

- **401 Unauthorized** (Missing or invalid token)

- **500 Internal Server Error**

---

Created for Backend documentation.
