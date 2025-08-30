# MERN Auth System 🔒 

A full-stack **MERN (MongoDB, Express, React, Node.js)** authentication system with email verification, password reset, and secure JWT login.

---

## **Live Demo**

[Frontend & Backend Live on Render](https://mern-auth-system-wfsk.onrender.com)

---

## **Features**

- **User Authentication**
  - Sign Up with name, email and password
  - Login and Logout
  - Check authentication status
- **Email Services**
  - Verify account via email after signup using mailtrap
  - Welcome emails on successful verification
  - Password reset emails with secure links
  - Reset success confirmation email
- **Password Management**
  - Forgot password flow with secure token
  - Reset password flow with token expiration
- **Security**
  - Passwords hashed using `bcryptjs`
  - JWT authentication stored in cookies
  - CORS configured for development and production
- **State Management**
  - Frontend state handled using `Zustand` for authentication

---

## **Technologies Used**

- **Frontend:** React, Vite, Axios, Zustand  
- **Backend:** Node.js, Express.js, MongoDB, Mongoose  
- **Authentication & Security:** bcryptjs, JWT, cookie-parser  
- **Email Service:** Mailtrap API for verification and password reset emails  
- **Deployment:** Render for backend & frontend  
---
## **Mailtrap**

**Mailtrap** is used to safely **test and debug all email workflows** in the MERN Auth System, including **email verification, welcome emails, password reset emails, and password reset success notifications**.

Check out here: [https://mailtrap.io](https://mailtrap.io)

---

## Project Structure

```
root/
├─ backend/
│ ├─ server.js
│ ├─ routes/
│ │ └─ auth.route.js
│ ├─ controllers/
│ │ └─ auth.controller.js
│ └─ db/
│ └─ connectDB.js
├─ frontend/
│ ├─ src/
│ ├─ package.json
│ └─ dist/ (after build)
├─ package.json
```

## **API Endpoints**

| Method | Route                            | Description                    |
| ------ | -------------------------------- | ------------------------------ |
| POST   | /api/auth/signup                 | Create a new user              |
| POST   | /api/auth/login                  | Login user                     |
| POST   | /api/auth/logout                 | Logout user                    |
| POST   | /api/auth/verify-email           | Verify user email              |
| GET    | /api/auth/check-auth             | Check if user is authenticated |
| POST   | /api/auth/forgot-password        | Send password reset email      |
| POST   | /api/auth/reset-password/:token | Reset password with token      |


## **Environment Variables**

Create a `.env` file in the root (backend) with:

```env
PORT=3000
NODE_ENV=development
MONGO_URI=<Your MongoDB Atlas URI>
JWT_SECRET=<Your JWT Secret>
MAILTRAP_TOKEN=<Your Mailtrap Token>
MAILTRAP_ENDPOINT=https://send.api.mailtrap.io/
CLIENT_URL=http://localhost:5173
```

## **Run app locally**


```env
npm run build
```

## **Start the app**

```env
npm run start
```

## **Quick Notes**

- Frontend API calls use relative path /api/auth in production and http://localhost:3000/api/auth in development.
- Make sure to create an account on mailtrap, and if you have your own domain use that to sent email to anyone.  
- If you are using the demo mailtrap domain, then you will be able to send emails to only mail connected to your account.  
- Make sure Mailtrap credentials are valid to test email functionality.  
- CORS is configured to allow http://localhost:5173 in development and your CLIENT_URL in production.  

---

✨ Thank you for checking out this project! ✨  
If you like it, consider giving the repo a ⭐ and sharing your feedback.  
Your support motivates me to build more amazing projects! 🚀




