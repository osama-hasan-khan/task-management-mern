# TaraeFlow - A Task Management App

> A modern full-stack task management application built with the MERN stack, Redux Toolkit, and TailwindCSS. It supports JWT authentication, protected routes, and a dashboard UI with task CRUD.

---

## 🚀 Features

- 🔐 Secure login/register with access & refresh token
- 🔄 Token refresh flow using Fetch API
- ✅ Task CRUD (Create, Read, Update, Delete)
- 🎨 TailwindCSS UI + dashboard layout
- 🌐 RESTful API using Express
- ⚡ Redux Toolkit for global state (auth, tasks)
- 📊 Dashboard with sidebar and protected routing
- ✅ Filter by Status (todo, in-progress, done)

---

## 🚀 Tech Stack

### Frontend
- ⚛️ React (with Router DOM)
- 🛠 Redux Toolkit (manual async logic, no createAsyncThunk)
- 🎨 TailwindCSS (for styling)
- 📡 Fetch API (JWT auth with bearer tokens)

### Backend
- 🟢 Node.js + Express
- 🌿 MongoDB + Mongoose
- 🔐 JWT Authentication (access & refresh tokens)
- 🧱 Modular architecture with best practices

---

## 🔧 Installation

```bash
# Clone the repository
git clone git-repo your-folder-name
cd your-folder-name

# Install backend
cd server
npm install

# Install frontend
cd ../client
npm install

### - ⚙️ Environment Variables

- create a .env file the server/ directory:

PORT=5000
MONGO_URI=mongodb://localhost:27017/task-manager
JWT_SECRET=your_jwt_secret
ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_EXPIRY=7d


