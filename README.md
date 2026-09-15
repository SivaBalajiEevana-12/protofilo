🔗 LinkZip
A modern full-stack URL shortener built with React, TypeScript, Node.js, Express, MongoDB, and JWT authentication.

LinkZip allows users to create short URLs, manage their links, track clicks, and view detailed click analytics.

🚀 Live Demo
Frontend: https://linkzip-kappa.vercel.app

Backend:

✨ Features
🔐 User registration and login

🍪 JWT authentication with HTTP-only cookies

🔗 Create short URLs

✏️ Custom URL aliases

⏳ Link expiration

📊 Click tracking and analytics

👤 User dashboard

📋 Copy shortened URLs

🗑️ Delete links

🔍 View individual link details

📱 Responsive UI

🛠️ Tech Stack
Frontend
React

TypeScript

Vite

Tailwind CSS

shadcn/ui

Redux Toolkit

React Router

Axios

Lucide React

Backend
Node.js

Express.js

TypeScript

MongoDB

Mongoose

JWT

bcryptjs

NanoID

CORS

Cookie Parser

📁 Project Structure
LinkZip/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── stores/
│   │   ├── types/
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controller/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── app.ts
│   │   └── index.ts
│   └── package.json
│
└── README.md
⚙️ Installation
Clone the repository:

git clone https://github.com/SivaBalajiEevana-12/LinkZip.git
cd LinkZip
Frontend
cd frontend
npm install
npm run dev
Backend
cd server
npm install
npm run dev
🔐 Environment Variables
Create .env inside the server directory:

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_refresh_token_secret

PORT=3000
📡 API Endpoints
Authentication
POST /api/user/register
POST /api/user/login
POST /api/user/refresh
POST /api/user/logout
GET  /api/user/me
Links
POST   /api/link
GET    /api/link
GET    /api/link/:id
PUT    /api/link/:id
DELETE /api/link/:id
Click Tracking
GET /c/:shortCode
GET /c/details/:linkId
🔄 How It Works
User enters original URL
          ↓
      LinkZip API
          ↓
    Generate shortCode
          ↓
       MongoDB
          ↓
 Short URL generated
          ↓
 User opens short URL
          ↓
 Click tracking
          ↓
 Redirect to original URL
📊 Analytics
For each shortened link, LinkZip tracks:

Total clicks

Unique clicks

IP address

User agent

Browser

Device

Operating system

Referer

Country

Click timestamp

🔒 Security
HTTP-only authentication cookies

Separate access and refresh JWT secrets

Password hashing with bcrypt

Protected API routes

CORS configuration

Authentication middleware

🏗️ Build for Production
Frontend
cd frontend
npm run build
Backend
cd server
npm run build
npm start
👨‍💻 Author
Siva Balaji Eevana

GitHub:
https://github.com/SivaBalajiEevana-12
