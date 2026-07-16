# 🎸 SetlistLab Backend

The backend API for **SetlistLab**, a full-stack MERN application that helps musicians organise songs and build reusable live performance setlists.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge)

---

## 🌐 Frontend Repository

https://github.com/tomrhysjones/setlistlab-frontend

---

## 📖 Overview

This repository contains the Express.js REST API that powers the SetlistLab frontend.

It is responsible for:

- User authentication
- Song management
- Setlist management
- Database communication
- REST API endpoints
- Secure CRUD operations

The backend communicates with a MongoDB database using Mongoose and provides data to the React frontend.

---

## ✨ Features

- User authentication
- RESTful API
- CRUD operations
- MongoDB integration
- Mongoose models
- Protected routes
- Express middleware
- JSON API responses

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JavaScript

---

## 📁 Project Structure

```text
controllers/
middleware/
models/
routes/
config/
server.js
package.json
```

---

## 🗄 Database Models

The application stores data using MongoDB.

Core models include:

- User
- Song
- Setlist

These models define the relationships between users, songs and reusable performance setlists.

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/tomrhysjones/setlistlab-backend
```

Install dependencies

```bash
npm install
```

Run the server

```bash
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file containing your environment variables.

Example:

```env
MONGODB_URI=your_connection_string
JWT_SECRET=your_secret_key
PORT=3000
```

> Replace the values above with your own development credentials.

---

## 📈 Future Improvements

- API documentation
- Automated testing
- Role-based authorisation
- Request validation
- Rate limiting
- Logging
- Docker support

---

## 👨‍💻 Author

**Tom Rhys Jones**

- GitHub: https://github.com/tomrhysjones
- LinkedIn: https://www.linkedin.com/in/tom-rhys-jones-63b553209/

---

## 📄 License

This project is licensed under the MIT License.


