# 📸 Photo Gallery Web App

A responsive **Photo Gallery Web Application** built using **React + Vite + Tailwind CSS**.
The application fetches photos from a public API and allows users to search and mark photos as favourites.

This project was created as part of the **Frontend React Internship Pre-Screening Assignment**.

---

# 🚀 Features

✅ Fetch photos from a public API
✅ Display photos in a **responsive grid layout**
✅ **Search filter** by author name (real-time)
✅ Mark photos as **favourites ❤️**
✅ Favourites persist using **localStorage**
✅ Loading and error states handling
✅ Clean and responsive UI using **Tailwind CSS**

---

# 🛠️ Tech Stack

* **React (Functional Components + Hooks)**
* **Vite**
* **Tailwind CSS**
* **JavaScript (ES6)**

---

# ⚙️ React Concepts Used

### 1️⃣ Custom Hook

A custom hook `useFetchPhotos` is used to handle API fetching logic.

Returns:

* photos
* loading
* error

This helps separate **data logic from UI components**.

---

### 2️⃣ useReducer

`useReducer` is used to manage the **favourites state**.

Why useReducer?

* The logic involves **toggling items**
* State updates depend on **previous state**
* Easier to manage complex state logic compared to useState

Favourites are also stored in **localStorage** to persist after page refresh.

---

### 3️⃣ useCallback

`useCallback` is used for the **search input handler** to prevent unnecessary function re-creation on every render.

---

### 4️⃣ useMemo

`useMemo` is used to compute the **filtered photo list** based on the search query.
This avoids recalculating the filtered list on every render.

---

# 📡 API Used

Picsum Photos API

```
https://picsum.photos/v2/list?limit=30
```

This API returns a list of photos with author details.

---

# 📂 Project Structure

```
src
 ├── components
 │    ├── Header.jsx
 │    ├── SearchBar.jsx
 │    ├── PhotoCard.jsx
 │    └── Gallery.jsx
 │
 ├── hooks
 │    └── useFetchPhotos.js
 │
 ├── reducers
 │    └── favouriteReducer.js
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

# 📱 Responsive Layout

| Device  | Columns |
| ------- | ------- |
| Desktop | 4       |
| Tablet  | 2       |
| Mobile  | 1       |

---

# ▶️ How to Run the Project

Clone the repository

```
git clone https://github.com/your-username/photo-gallery-app.git
```

Install dependencies

```
npm install
```

Run the development server

```
npm run dev
```

---

# 🎥 Demo Video

Screen recording explaining:

* App functionality
* Custom hook
* useReducer logic
* useCallback & useMemo usage

(Video link will be added here)

---

# ⭐ Assignment Notes

This project follows all the requirements specified in the assignment:

* React + Vite setup
* Tailwind CSS styling
* Custom hook for API fetching
* useReducer for favourites
* useCallback and useMemo usage
* Responsive grid layout
* No external UI libraries used

---

# 👨‍💻 Author

**Saurabh Kumar**

GitHub:
https://github.com/saurabhRathour73

LinkedIn:
https://www.linkedin.com/in/saurabh-kumar-42704b288/
