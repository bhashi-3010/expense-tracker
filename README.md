# 💰 Expense Tracker (Full Stack Application)

A modern full-stack Expense Tracker web application to manage income, expenses, and visualize financial insights using interactive dashboards.

---

## 📌 Overview

This project helps users efficiently track their financial activities without complex tools. It is ideal for:

* Students learning full-stack development
* Developers practicing REST APIs and MongoDB
* Users who want a simple personal finance manager

The system records transactions, calculates balances, and provides visual insights like charts and category breakdowns.

---

## ✨ Features

* 📊 Dashboard showing total income, expenses, and balance
* 💸 Add, edit, and delete transactions
* 🔍 Search transactions instantly
* 📈 Bar chart for spending analysis
* 🍩 Donut chart for category distribution
* 📂 Category-wise expense tracking
* ⚙️ Settings page (UI-based preferences)
* 🤖 Simulated AI categorization button

---

## 🏗️ Tech Stack

**Frontend**

* HTML
* CSS
* JavaScript

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB (Mongoose ODM)

---

## 📂 Project Structure

```
FinTrack/
├── frontend/              
│   └── index.html
│
├── backend/               
│   ├── models/            
│   ├── routes/            
│   ├── server.js          
│   └── package.json
│
├── .env.example          
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```
git clone https://github.com/bhashi-3010/expense-tracker.git
cd expense-tracker
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run server:

```
npm start
```

---

### 3️⃣ Frontend Setup

Open:

```
frontend/index.html
```

Or use Live Server in VS Code.

---

## 🌐 API Endpoints

Base URL: `http://localhost:5000/api/transactions`

| Method | Endpoint | Description          |
| ------ | -------- | -------------------- |
| GET    | /        | Get all transactions |
| POST   | /        | Add new transaction  |
| PUT    | /:id     | Update transaction   |
| DELETE | /:id     | Delete transaction   |

---

## 📊 Data Model

```
{
  title: String,
  amount: Number,
  category: String,
  type: "income" | "expense",
  date: String
}
```

---

## 📈 Functional Flow

1. User adds a transaction
2. Data is stored in MongoDB
3. Backend processes totals
4. Frontend updates UI dynamically
5. Charts reflect real-time financial data

---

## 🔐 Environment Variables

Create a `.env` file inside backend:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## 🧠 Design Highlights

* RESTful API structure
* Clean separation of frontend and backend
* Dynamic UI updates using JavaScript
* Real-time calculation of financial data
* Modular backend (routes + models)

---

## 🚀 Future Enhancements

* User authentication (JWT login/signup)
* Budget alerts and notifications
* Export reports (PDF/Excel)
* Mobile responsive UI
* Cloud deployment

---

## 🧪 Testing

You can test APIs using:

* Postman
* Browser (GET requests)
* Frontend UI

---

## 👨‍💻 Author

**Bhashitha Royal**

---

## 📌 Note

This project was built for learning full-stack development and demonstrating real-world application architecture.

---

## ⭐ Contribution

Feel free to fork, improve, and contribute to this project.
