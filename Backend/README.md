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

Created for Backend documentation.
