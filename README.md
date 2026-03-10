# SetlistLab — Backend API

Backend API for **SetlistLab**, a MERN stack app for managing songs and performance setlists.

## 🚀 Overview
RESTful API providing:
- Authentication (JWT)
- Song management
- Setlist management
- Song ↔ Setlist relationships
- Protected routes

## 🧱 Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose ODM
- JWT Authentication
- bcrypt password hashing
- CORS
- Morgan logging
- dotenv

## 🔐 Authentication
- User signup
- User login
- JWT token issuance
- Protected routes via middleware

## 📡 API Endpoints

### Auth
- POST /api/auth/signup
- POST /api/auth/login


### Songs

- POST /api/songs
- GET /api/songs
- DELETE /api/songs/:id


### Setlists

- POST /api/setlists
- GET /api/setlists
- PUT /api/setlists/:id
- DELETE /api/setlists/:id
- PUT /api/setlists/:id/songs
- PUT /api/setlists/:id/remove-song


## 🗄️ Database Models

### User
- email
- password (hashed)

### Song
- title
- artist
- user reference

### Setlist
- name
- venue
- gigDate
- notes
- songs (ObjectId refs)
- user reference

## 🧪 Development
```bash
npm install
npm run dev

## Runs on:
http://localhost:5001

