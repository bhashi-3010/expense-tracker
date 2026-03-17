# 💰 Expense Tracker

A full-stack web application to track income and expenses, visualize spending patterns, and manage personal finances efficiently.

---

## 🚀 Overview

The Expense Tracker helps users:

* Record income and expenses
* Monitor financial balance
* Analyze spending through visual charts
* Manage transactions in a simple interface

---

## ✨ Key Features

* 📊 **Dashboard** – View total income, expenses, and balance
* 💸 **Transaction Management** – Add, edit, delete transactions
* 🔍 **Search Functionality** – Quickly find transactions
* 📈 **Bar Chart** – Compare spending vs budget
* 🍩 **Donut Chart** – Category-wise expense distribution
* ⚙️ **Settings Page** – Basic user preferences (UI)

---

## 🛠️ Tech Stack

| Layer    | Technology            |
| -------- | --------------------- |
| Frontend | HTML, CSS, JavaScript |
| Backend  | Node.js, Express.js   |
| Database | MongoDB (Mongoose)    |

---

## 📁 Project Structure

```
FinTrack/
│
├── frontend/
│   └── index.html
│
├── backend/
│   ├── server.js
│   ├── models/
│   ├── routes/
│   └── package.json
│
├── .env.example
└── README.md
```

---

## ⚙️ Setup Guide

### 1. Clone Repository

```
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
```

---

### 2. Backend Setup

```
cd backend
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start server:

```
npm start
```

---

### 3. Frontend Setup

Open the file:

```
frontend/index.html
```

Or run using Live Server.

---

## 🌐 API Endpoints

| Method | Endpoint              | Description            |
| ------ | --------------------- | ---------------------- |
| GET    | /api/transactions     | Fetch all transactions |
| POST   | /api/transactions     | Add new transaction    |
| PUT    | /api/transactions/:id | Update transaction     |
| DELETE | /api/transactions/:id | Delete transaction     |

---

## 🔐 Environment Variables

Create a `.env` file in the backend:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## 📈 Future Enhancements

* User authentication (Login / Signup)
* Budget alerts & notifications
* Export reports (PDF / Excel)
* Mobile responsive design
* Real-time analytics

---

## 👨‍💻 Author

**Thudumaladinne Bhashitha**

---

## 📌 Note

This project was developed as a learning project to understand full-stack web development and real-world application structure.
