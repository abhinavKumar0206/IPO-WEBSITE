# Bluestock - IPO Management and Analysis Web App

Bluestock is a full-stack web application designed for managing, viewing, and analyzing Initial Public Offerings (IPOs). It features separate interfaces for users and admins, role-based access, dynamic IPO listing, registration, authentication, and educational resources on technical analysis and financial markets.

---

## 🚀 Features

- 🔐 User and Admin authentication (local)
- 📊 Manage IPOs (admin role)
- 🗓 View upcoming IPOs and detailed listings
- 📚 Educational modules on stock market concepts
- 📈 Integrated trading dashboard (charts, metrics)
- 🧠 React + Tailwind CSS frontend
- ⚙️ Express.js + PostgreSQL backend
- 🔄 Real-time database updates via RESTful APIs

---

## 🏗️ Tech Stack

| Frontend        | Backend         | Database     | Other             |
|----------------|------------------|--------------|-------------------|
| React.js (Vite) | Express.js (Node) | PostgreSQL   | Tailwind CSS, JWT |

---

## 🔧 Local Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/bluestock-ipo-webapp.git
cd bluestock-ipo-webapp

### 2. Install Dependencies
Run this from the root folder (will install both client and server dependencies):

```bash
npm install

If your server and client are split, you may also need:

```bash
cd server
npm install

cd ../
cd src
npm install

### 3. Setup PostgreSQL

1: Ensure PostgreSQL is installed and running locally.

2: Create a new database (e.g. bluestock_db)

3: Then run the following to populate schema and initial data:

```bash
psql -U your_pg_user -d bluestock_db -f database/init.sql

Replace your_pg_user with your actual PostgreSQL username.

### 4. Configure Environment Variables

Create a .env file inside your /server folder with the following:

```.env

PORT=5000
DATABASE_URL=postgresql://your_pg_user:your_pg_password@localhost:5432/bluestock_db

### 5. Run the Application

From the project root:
Start the backend:

```bash
cd server
npm start
Start the frontend:

```bash
cd ../
npm run dev


📁 Project Structure

```bash
├── server/             # Express backend
│   ├── routes/         # API endpoints
│   ├── models/         # DB connection
│   └── .env            # Environment variables
├── src/                # React frontend
│   ├── components/     # Reusable UI
│   ├── pages/          # Routes like ManageIPO, Dashboard
│   └── App.tsx         # Main router setup
├── public/             # Static files
├── database/init.sql   # PostgreSQL schema + sample data
├── .gitignore
└── README.md

🔒 Protected Routes

1:Pages like ManageIPO are protected and require authentication.

2:Admins have access to registration & dashboard.

3:Users can browse IPOs, educational modules, and trading data.

🙋‍♂️ Contributions & Issues

Pull requests are welcome! For major changes, please open an issue first.

📄 License

MIT License

👨‍💻 Developed by Abhinav Kumar