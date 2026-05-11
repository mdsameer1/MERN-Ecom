# 🛒 ShopSphere

ShopSphere is a full-stack E-Commerce web application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). It provides users with a seamless online shopping experience with secure authentication, product management, cart functionality, order processing, and payment integration.

---

## 🚀 Features

### 👤 User Features
- User Registration & Login
- JWT Authentication & Authorization
- Browse Products
- Search & Filter Products
- Add to Cart
- Update Cart Quantity
- Wishlist Functionality
- Checkout System
- Online Payment Integration
- Order History
- Responsive Design

### 🛠️ Admin Features
- Admin Dashboard
- Add/Edit/Delete Products
- Manage Users
- Manage Orders
- Upload Product Images
- Sales Overview & Analytics

---

## 🧰 Tech Stack

### Frontend
- React.js
- Redux Toolkit / Context API
- Tailwind CSS / CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication
- JWT (JSON Web Token)
- bcrypt.js

### Payment Gateway
- Razorpay / Stripe

### Other Tools
- Cloudinary (Image Upload)
- Nodemailer
- dotenv

---

## 📂 Folder Structure

```bash
ShopSphere/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── context/
│   │   ├── services/
│   │   ├── App.js
│   │   └── main.js
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   ├── utils/
│   ├── server.js
│
├── .env
├── package.json
└── README.md

⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/shopsphere.gitcd shopsphere
2️⃣ Install Dependencies
Frontend
cd frontendnpm install
Backend
cd backendnpm install

🔑 Environment Variables
Create a .env file inside backend folder and add:
PORT=5000MONGO_URI=your_mongodb_connectionJWT_SECRET=your_secret_keyRAZORPAY_KEY_ID=your_keyRAZORPAY_SECRET=your_secretCLOUDINARY_CLOUD_NAME=your_cloud_nameCLOUDINARY_API_KEY=your_api_keyCLOUDINARY_API_SECRET=your_api_secret

▶️ Run Application
Start Backend
cd backendnpm run server
Start Frontend
cd frontendnpm start

🌐 API Endpoints
Auth Routes


POST /api/auth/register


POST /api/auth/login


Product Routes


GET /api/products


GET /api/products/:id


Cart Routes


POST /api/cart/add


DELETE /api/cart/remove/:id


Order Routes


POST /api/orders


GET /api/orders/myorders



📸 Screenshots
Add project screenshots here.
Example:


Home Page


Product Page


Cart Page


Admin Dashboard



🔒 Security Features


Password Hashing using bcrypt


Protected Routes


JWT Authentication


Role-Based Access Control


Secure Payment Handling



📈 Future Improvements


AI Product Recommendation System


Real-time Order Tracking


Multi-Vendor Support


Dark Mode


Progressive Web App (PWA)


Chat Support System



👨‍💻 Author
Md Sameer


GitHub: mdsameer1 GitHub


LinkedIn: Md Sameer LinkedIn



⭐ Support
If you like this project, give it a ⭐ on GitHub.
