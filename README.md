# 🎵 Mood Music Mapper

Mood Music Mapper is a frontend web application that recommends and organizes music based on the user’s mood.  
The project is built using **HTML, CSS, and Vanilla JavaScript**, with a clean folder structure, authentication flow, and persistent data storage using `localStorage`.

🔗 Live Demo: https://music-player-lemon-omega.vercel.app

---

## 🚀 Features

- 🔐 **Authentication Flow**
  - Sign In & Sign Up pages
  - Protected routes (cannot access player without login)
  - Logout functionality

- 🎧 **Mood-Based Music Player**
  - Select moods like Happy, Sad, Chill, Romantic, Energetic
  - Display curated song lists for each mood
  - Embedded Spotify & YouTube players

- ➕ **Add Songs Dynamically**
  - Add new songs to any mood
  - Automatically converts Spotify / YouTube links to embed format

- 💾 **Persistent Data**
  - Songs are saved using `localStorage`
  - Data remains even after page refresh

- 🎨 **Clean UI**
  - Glassmorphism-inspired design
  - Responsive layout
  - Reusable CSS for auth pages and main app

---

## 🛠 Tech Stack

- **HTML5** – Structure
- **CSS3** – Styling & layout
- **JavaScript (Vanilla)** – Logic & interactivity
- **LocalStorage** – Client-side persistence

---

## 📁 Project Structure

```
music-player/
│
├─ index.html # Main music player (protected)
│
├─ css/
│ ├─ auth.css # Signin / Signup styles
│ └─ main.css # Music player styles
│
├─ js/
│ ├─ auth.js # Authentication logic
│ ├─ data.js # Mood data + localStorage handling
│ └─ player.js # Player & UI logic
│
├─ pages/
│ ├─ signin.html # Entry point
│ └─ signup.html
│
└─ assets/ # Images / audio (optional)
```

---

## 🔐 Authentication Flow

1. User is redirected to **Sign In** if not logged in
2. Successful login sets a flag in `localStorage`
3. Access to `index.html` is granted
4. Logout clears authentication state

---

## 🧪 How to Run Locally

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/music-player.git
Open index.html in a browser
(or use Live Server for best experience)


---

## 📌 Future Improvements

Dark / Light mode toggle

Delete song feature

Search within playlists

Backend authentication

User-specific playlists


## 👩‍💻 Author

Lavanya Agrawal
Frontend Developer | Web Enthusiast

⭐ If you like this project

Give it a ⭐ on GitHub — it helps a lot!


---
