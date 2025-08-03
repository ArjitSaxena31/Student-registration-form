# 🎓 Student Registration Form (Full Stack JavaScript)

## 📌 Overview
The **Student Registration Form** is a web application that digitizes and streamlines the student registration process. It allows users to enter student details online, validates the data in real-time, and stores it securely in a MongoDB database. This project eliminates manual data entry errors and provides an efficient, modern solution for educational institutions.

---

## 🚀 Features
- **User-Friendly Interface** built with HTML, CSS, and JavaScript.
- **Client-Side Validation** to ensure data quality before submission.
- **REST API Backend** built with Node.js and Express.
- **MongoDB Database** integration with Mongoose for schema validation.
- **Error Handling** and success messages for smooth user experience.

---

## 🛠 Tech Stack
**Frontend:** HTML, CSS, JavaScript  
**Backend:** Node.js, Express.js  
**Database:** MongoDB, Mongoose  
**Tools:** Git, VS Code, MongoDB Compass  

---

## 📂 Project Structure


student-registration-form/
├── client/
│ ├── index.html
│ ├── style.css
│ └── script.js
├── server/
│ ├── server.js
│ └── models/
│ └── Student.js
├── .env
└── package.json


---

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
bash
git clone https://github.com/your-username/student-registration-form.git
cd student-registration-form


2️⃣ Install Backend Dependencies
bash
cd server
npm install

3️⃣ Configure Environment Variables
Create .env file inside server/ and add:
bash

MONGO_URI=mongodb://localhost:27017/studentDB

4️⃣ Start MongoDB Server
bash

mongod

5️⃣ Run Backend Server
bash

node server.js

6️⃣ Open Frontend
Open client/index.html in your browser or use Live Server in VS Code.

Arjit Saxena
📧 Email: saxenaarjit91@gmail.com
🌐 GitHub: ArjitSaxena31
