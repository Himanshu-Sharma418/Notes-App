# Note Taking App

This is a full-stack Note Taking Web Application built with the **MERN** stack (MongoDB, Express, React, Node.js), styled with **Tailwind CSS** and **DaisyUI**, and protected with **Upstash Redis** rate-limiting.

---

## Features

- **Full CRUD Functionality**: Create, view, update, and delete notes effortlessly.
- **Rate Limiting**: Integrated **Upstash Redis** sliding-window rate limiter to prevent API abuse (100 requests / 60 seconds).
- **Responsive UI**: Built using Tailwind CSS and DaisyUI.
- **Toast Notifications**: Real-time user feedback powered by `react-hot-toast`.
- **Single-Repo Deployment Ready**: Production-ready setup serving static frontend files directly through the Express backend.

---

## Tech Stack

### **Frontend**
- **React 19** & **Vite 8**
- **React Router (v8)** for client-side routing
- **Axios** for API requests
- **Tailwind CSS v3** & **DaisyUI** for styling
- **Lucide React** for icons
- **React Hot Toast** for alerts & notifications

### **Backend**
- **Node.js** & **Express.js**
- **MongoDB** & **Mongoose** for data persistence
- **Upstash Redis** (`@upstash/ratelimit` & `@upstash/redis`) for rate limiting
- **Cors** & **Dotenv**
- **Nodemon** for live reloading during development

---

## Project Structure

```
Note-taking app/
├── backend/
│   ├── src/
│   │   ├── config/          # Database (MongoDB) & Upstash Redis configs
│   │   ├── controllers/     # Notes CRUD controller handlers
│   │   ├── middleware/      # Rate-limiting middleware
│   │   ├── models/          # Mongoose schemas (Note model)
│   │   ├── routes/          # Express route definitions
│   │   └── server.js        # Express app entry point
│   └── package.json
|
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── lib/             # Axios instance & utility functions
│   │   ├── pages/           # Page views
│   │   ├── App.jsx          # Route configuration
│   │   └── main.jsx         # React application root
│   ├── tailwind.config.js   # Tailwind & DaisyUI configuration
│   └── package.json
|
├── .gitignore
├── package.json             # Root scripts for building and running
└── README.md
```

---

## Environment Variables

Create a `.env` file in the `backend/` directory with the following variables:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
NODE_ENV=development
```

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)
- [Upstash Redis](https://upstash.com/) account (for rate-limiting keys)

### 1. Installation

Install all backend and frontend dependencies:

```bash
# Install root, backend, and frontend dependencies
npm run build
```

Or install them manually:

```bash
# Install backend dependencies
cd backend && npm install

# Install frontend dependencies
cd ../frontend && npm install
```

### 2. Running in Development Mode

Run the backend and frontend servers in separate terminals:

**Backend:**
```bash
cd backend
npm run dev
```
*(Runs on `http://localhost:5001`)*

**Frontend:**
```bash
cd frontend
npm run dev
```
*(Runs on `http://localhost:5173`)*

---

## Production Deployment

To build the frontend and serve it directly via the backend Express server:

1. Build frontend and install dependencies:
   ```bash
   npm run build
   ```
2. Set `NODE_ENV=production` in `backend/.env`.
3. Start the production server:
   ```bash
   npm start
   ```

---

## API Endpoints

| Method | Endpoint         | Description                   |
| :---   | :---             | :---                          |
| `GET`  | `/api/notes`     | Fetch all notes               |
| `GET`  | `/api/notes/:id` | Fetch a single note by ID     |
| `POST` | `/api/notes`     | Create a new note             |
| `PUT`  | `/api/notes/:id` | Update an existing note by ID |
| `DELETE`| `/api/notes/:id`| Delete a note by ID           |

---
