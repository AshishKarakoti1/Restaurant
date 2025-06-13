# 🍽️ Simple Restaurant Backend

A beginner-friendly backend project built using **Node.js**, **Express.js**, and **MongoDB**. This project helped me practice building RESTful APIs, performing CRUD operations, and working with MongoDB through Mongoose.

---

## 🚀 Features

- RESTful API architecture
- CRUD operations (Create, Read, Update, Delete)
- MongoDB integration using Mongoose
- Express.js routing and middleware
- Clean and modular code structure
- Error handling with proper responses

---

## 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman (for API testing)

---

## 📂 Project Structure

restaurant-backend/
├── models/
│ ├── menuItem.js
│ └── person.js
├── routes/
│ ├── menuRoutes.js
│ └── personRoutes.js
├── db.js
├── server.js
├── .env
└── package.json

---

## 🔗 API Routes

### 🧍 Person Routes

| Method | Endpoint            | Description            |
|--------|---------------------|------------------------|
| GET    | /api/person         | Get all people         |
| GET    | /api/person/:id     | Get a person by ID     |
| POST   | /api/person         | Add a new person       |
| PUT    | /api/person/:id     | Update a person by ID  |
| DELETE | /api/person/:id     | Delete a person by ID  |

### 🍽️ Menu Routes

| Method | Endpoint            | Description            |
|--------|---------------------|------------------------|
| GET    | /api/menu           | Get all menuItem       |
| GET    | /api/menu/:id       | Get a menuItem by ID   |
| POST   | /api/menu           | Add a new menuItem     |
| PUT    | /api/menu/:id       | Update menuItem by ID  |
| DELETE | /api/menu/:id       | Delete menuItem by ID  |

---

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/restaurant-backend.git
cd restaurant-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a .env file and add your MongoDB connection string:

```.env
MONGODB_URI=your_mongo_connection_string
```

### 4. Start the server

```bash
npm start
```

### 📚 What I Learned
Setting up Express servers and routes

Connecting Node.js to MongoDB

Creating and testing REST APIs

Organizing backend code cleanly

Handling requests, responses, and errors effectively

### 🧪 Testing
Use Postman or any REST client to test the API endpoints.

### 📌 Notes
This project is for learning purposes only. Feel free to fork it and build more features on top like authentication, file uploads, or frontend integration.
