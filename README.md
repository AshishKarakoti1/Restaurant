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
│ └── Person.js
├── routes/
│ └── personRoutes.js
├── server.js
├── .env
└── package.json

yaml
Copy
Edit

---

## 🔗 API Routes

### 🧍 Person Routes

| Method | Endpoint            | Description            |
|--------|---------------------|------------------------|
| GET    | /api/people         | Get all people         |
| GET    | /api/people/:id     | Get a person by ID     |
| POST   | /api/people         | Add a new person       |
| PUT    | /api/people/:id     | Update a person by ID  |
| DELETE | /api/people/:id     | Delete a person by ID  |

> Add more routes here if you’ve added other resources like menu items.

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

4. Start the server

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
