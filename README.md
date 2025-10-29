# 🛒 Vibe Commerce — Mock E-Commerce Cart (MERN Stack)

A full-stack shopping cart web app built for **Vibe Commerce internship screening**.  
It demonstrates modern **React + Tailwind CSS (Frontend)** and **Node.js + Express + MongoDB (Backend)** integration with CRUD APIs, mock checkout, and responsive UI.

---

## 📂 Project Structure

├── backend/
│ ├── models/
│ │ ├── Product.js
│ │ └── CartItem.js
│ ├── routes/
│ │ ├── products.js
│ │ └── cart.js
│ ├── seed.js
│ └── server.js
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── App.js
│ │ ├── index.js
│ │ └── index.css
│ └── tailwind.config.js
│
├── .gitignore
├── requirements.txt
└── README.md



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


