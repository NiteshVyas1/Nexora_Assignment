# 🛒 Vibe Commerce — Mock E-Commerce Cart (MERN Stack)

A full-stack shopping cart web app built for **Vibe Commerce internship screening**.  
It demonstrates modern **React + Tailwind CSS (Frontend)** and **Node.js + Express + MongoDB (Backend)** integration with CRUD APIs, mock checkout, and responsive UI.

<img width="1476" height="885" alt="image" src="https://github.com/user-attachments/assets/22d58477-6b72-4881-8d62-f7d3484b4fa2" />
<img width="1453" height="480" alt="image" src="https://github.com/user-attachments/assets/cdeb8e7c-feaf-457c-944a-11c83a7a5e82" />


---

## 📂 Project Structure

<img width="268" height="550" alt="image" src="https://github.com/user-attachments/assets/d76368f4-c708-4185-9694-45d36cc68ff4" />




---

## 🚀 Tech Stack

**Frontend:**
- React (Create React App)
- Tailwind CSS v4
- PostCSS + Autoprefixer

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- dotenv, cors, body-parser, morgan

---

## ⚙️ Setup Instructions

### 🔸 1. Clone the Repository
```bash
git clone https://github.com/NiteshVyas1/Nexora_Assignment.git
cd nexora_assignment

## Backend Setup 
cd backend
npm install

## Seed mock products:
node seed.js

##Start the backend:
npm start
or with nodemon:

bash
npx nodemon server.js
The API will run on http://localhost:5000

3. Frontend Setup
cd ../frontend
npm install
npm start


The React app will run on http://localhost:3000
| Method | Endpoint        | Description                              |
| ------ | --------------- | ---------------------------------------- |
| GET    | `/api/products` | Get all products                         |
| POST   | `/api/cart`     | Add an item to cart `{ productId, qty }` |
| DELETE | `/api/cart/:id` | Remove an item from cart                 |
| GET    | `/api/cart`     | Retrieve cart with total                 |
| POST   | `/api/checkout` | Mock checkout, returns receipt           |


