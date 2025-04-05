# 🎮 Front-End Developer Recruitment Test Project

Welcome to the **Front-End Developer Recruitment Test**! This project involves building a fully responsive game discovery website using the [RAWG Video Games Database API](https://rawg.io/apidocs). It is designed to evaluate your front-end skills using modern tools and libraries.

---

## 📌 Tech Stack

Please use **only** the following technologies:

- ⚛️ React (Functional Components + Hooks)
- 🧠 Redux (State Management)
- 🔐 Clerk Auth (Authentication)
- 🎨 Bootstrap & React-Bootstrap
- 💅 Vanilla CSS

---

## 📂 Project Features & Steps

### 1. 🏠 Main Page Layout

Create the main layout with:

- **Header**  
  - Logo  
  - Search bar  
  - “Library/Bookmark” (favorites section)

- **Sidebar (Filters Menu)**  
  - Filter options for:
    - Category
    - Tags
    - Release Year
    - Popularity

- **Main Hero Section (Game Cards Grid)**  
  - Game image  
  - Description  
  - Tags  
  - Category  
  - Ratings

---

### 2. 🧮 Filtering

- Filters must dynamically update the game list.
- Enable filtering by:
  - Category
  - Tags
  - Release Year
  - Popularity

---

### 3. 🔍 Real-Time Search

- Implement a responsive search bar.
- Game list should update in **real time** as the user types.

---

### 4. 📄 Pagination

- Handle large game lists using **pagination**.
- Users should be able to navigate between pages easily.

---

### 5. 📘 Game Detail Page

When a game card is clicked, redirect to a detailed view showing:

- Game Title
- Full Description
- Screenshots
- Ratings
- Pricing (if available)
- System Requirements

---

### 6. 🔐 Clerk Authentication

- Implement user sign up, login, logout using [Clerk](https://clerk.com).
- Access to the “Library/Bookmark” must be **restricted to authenticated users**.

---

### 7. ❤️ State Management (Redux)

- Use Redux to manage:
  - Favorite/Bookmarked games
- Features:
  - Add/Remove games from favorites
  - Persistence across sessions (local storage or backend)

---

## 📱 Responsiveness

Your application **must** be fully responsive and function seamlessly across devices (mobile, tablet, desktop).

---

## 🧑‍💻 Best Practices

- Use **functional components and hooks** only (no class components).
- Keep code clean, modular, and maintainable.
- Use proper state management across components.
- Organize files with a scalable folder structure.
- Handle edge cases and loading/error states properly.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/frontend-recruitment-task.git
cd frontend-recruitment-task
```
###  2. Install dependencies

npm install
3. Environment variables
Create a .env file in the root with the following:


REACT_APP_RAWG_API_KEY=your_rawg_api_key
REACT_APP_CLERK_FRONTEND_API=your_clerk_frontend_api
REACT_APP_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
🔑 You can obtain the RAWG API key at rawg.io/apidocs

🔐 Clerk setup guide: Clerk Docs

4. Run the app locally

npm start
📁 Suggested Folder Structure

src/
├── assets/
├── components/
│   ├── Header.jsx
│   ├── GameCard.jsx
│   └── Sidebar.jsx
├── pages/
│   ├── Home.jsx
│   └── GameDetail.jsx
├── redux/
│   ├── store.js
│   └── favoritesSlice.js
├── 
│   └── api.js
├── App.jsx
└── index.js

🔗 Useful Resources
RAWG API Docs

Clerk Auth Docs

Redux Toolkit

React-Bootstrap

🧪 Bonus Ideas (Optional)
Add loading spinners or skeletons while fetching data

Add dark mode support

Implement infinite scrolling as an alternative to pagination

Allow sorting (A-Z, rating, etc.)

🎯 Goal
Showcase your skills with React, Redux, Clerk Auth, and component design by delivering a smooth, functional, and well-styled application.

Good luck, and have fun building! 🚀🎮


---

Let me know if you want to add badges (like build status, license, etc.), demo screenshots, or a live deployment link section.






You said:
PLEASE GIVE LIKE FILE NOT GIVE WHAT I DO GIVE HOW I START SMALL ELABORATE


ChatGPT said:
Got it! You want the README.md to be beginner-friendly and guide someone step by step like a real project file — not just a task description. Here's a clean, structured, and developer-friendly README.md file that you can directly use in your project folder:

✅ README.md

# 🎮 GameVerse - Game Discovery Platform

A fully responsive front-end web application to discover video games using the RAWG API.

Built with **React**, **Redux**, **React-Bootstrap**, **Clerk Auth**, and **Vanilla CSS**.

---

## 🚀 Features

- 🔍 Search for games by name (real-time search)
- 🎮 View game cards with images, tags, ratings & more
- 🎛️ Filter games by category, tags, release year, popularity
- 📄 View detailed page of each game
- ❤️ Bookmark your favorite games (requires login)
- 🔐 User Authentication using Clerk
- 🔄 Pagination to explore more games
- 📱 Fully responsive design (mobile-friendly)

---

## 🛠️ Tech Stack

| Technology       | Purpose                        |
|------------------|--------------------------------|
| React            | UI building                    |
| Redux Toolkit    | State Management               |
| Clerk            | Authentication (Sign up/Login) |
| React-Bootstrap  | UI components                  |
| Bootstrap & CSS  | Styling                        |
| RAWG API         | Game data                      |

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/gameverse.git
cd gameverse

###2. Install Dependencies
npm install

## 3. Set up Environment Variables
Create a .env file in the root folder and add:


REACT_APP_RAWG_API_KEY=your_rawg_api_key
REACT_APP_CLERK_PUBLISHABLE_KEY=your_clerk_key
REACT_APP_CLERK_FRONTEND_API=your_clerk_frontend_api
📝 You can get a RAWG API key here: RAWG.io API
🛡️ You can create a Clerk account and get API keys here: Clerk.dev
