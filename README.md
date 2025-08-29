#  Highway Delite – Secure Notes App

**Highway Delite** is a modern, full-stack note-taking application that lets users securely **sign up or log in using Email OTP or Google OAuth**. Authenticated users can create, view, and manage their personal notes. The app ensures **security with JWT-based authentication** and provides a smooth, responsive UI.

---

##  Key Features

- 🔐 **Authentication**
  - Email OTP login/sign-up  
  - Google OAuth for one-click login  
- 📝 **Notes Management**
  - Create, view, and delete personal notes  
  - Notes are user-specific and secure  
- 👤 **User Profile**
  - View authenticated user’s name & email  
- 💻 **Frontend**
  - Beautiful, responsive design using **ShadCN** & **TailwindCSS**  
- ⚡ **UX**
  - Real-time **toast notifications** for actions  
  - Fully mobile-friendly  

---

## 🛠️ Tech Stack

| Layer        | Technology Used                                |
|-------------|-----------------------------------------------|
| Frontend     | React (TypeScript), Vite, ShadCN, TailwindCSS |
| Backend      | Node.js, Express (TypeScript)                 |
| Authentication | SendGrid (Email OTP), Google OAuth          |
| Database     | MongoDB (Mongoose)                            |
| Security     | JWT Tokens                                    |
| Deployment   | Vercel (Frontend), Render (Backend)           |

---
<img width="1023" height="707" alt="image" src="https://github.com/user-attachments/assets/e214cd12-7b9d-4721-90f9-78b055219ae4" />

<img width="1647" height="841" alt="image" src="https://github.com/user-attachments/assets/6efe13cd-fb73-4c0b-a4ee-d08b788df224" />
<img width="1552" height="858" alt="image" src="https://github.com/user-attachments/assets/b634a28b-5b98-439b-a6ff-e98b14d6deef" />
<img width="1531" height="796" alt="image" src="https://github.com/user-attachments/assets/bb544a09-fbfd-4e23-a6a5-6c917205592f" />
<img width="1562" height="856" alt="image" src="https://github.com/user-attachments/assets/d570fde5-9430-4b8d-a776-6f92a9724e63" />







## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/surjeetkumar8006/Highway-Delite.git
cd highway-delite
2️⃣ Backend Setup
bash
Copy code
cd server
npm install
Create a .env file in the server folder:

env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
SENDGRID_API_KEY=your_sendgrid_api_key
GOOGLE_CLIENT_ID=your_google_client_id
Start the backend server:

bash
Copy code
npm run dev
3️⃣ Frontend Setup
bash
Copy code
cd ../client
npm install
Create a .env file in the client folder:

env
Copy code
VITE_API_BASE_URL=http://localhost:5000/api
VITE_GOOGLE_CLIENT_ID=your_google_client_id
Start the frontend:

bash
Copy code
npm run dev
🚀 Deployment
Frontend – Vercel
Connect your GitHub repository

Set environment variables:

VITE_API_BASE_URL

VITE_GOOGLE_CLIENT_ID

Backend – Render
Add environment variables:

MONGO_URI

JWT_SECRET

SENDGRID_API_KEY

GOOGLE_CLIENT_ID

📂 Folder Structure
plaintext
Copy code
highway-delite/
│
├── client/              # React Frontend
│   └── src/
│       ├── pages/       # Page Components
│       ├── components/  # Reusable Components
│       └── lib/         # Helper Functions
│
├── server/              # Node.js Backend
│   ├── controllers/     # Route Handlers
│   ├── models/          # Mongoose Models
│   ├── routes/          # API Routes
│   ├── middlewares/     # Middleware Functions
│   └── utils/           # Utility Functions
│
└── README.md
📌 Highlights
Full TypeScript support on both frontend and backend

JWT-protected routes for security

Easy to customize and extend

Optimized for mobile and desktop
