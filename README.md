# 🔧 GrowthProAI – Local Business Dashboard (Backend)

This is the **backend API** for the Local Business Dashboard built as part of the GrowthProAI Full Stack Intern Assignment. It simulates Google review stats and SEO headlines for local businesses.

## 🔗 Live API

**URL:** [https://growthprobackend.onrender.com](https://growthprobackend.onrender.com)

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- CORS

---

## 📂 API Endpoints

### 1. `POST /business-data`

Returns simulated Google rating, reviews, and SEO headline.

#### ✅ Example Request

```json
{
  "name": "Cake & Co",
  "location": "Mumbai"
}
```

#### ✅ Example Response

```json
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}
```

---

### 2. `GET /regenerate-headline?name=...&location=...`

Returns a randomly chosen AI-style SEO headline.

#### ✅ Example URL

```
GET /regenerate-headline?name=Cake%20&%20Co&location=Mumbai
```

#### ✅ Example Response

```json
{
  "headline": "Cake & Co – The Talk of Mumbai's Sweet Scene in 2025"
}
```

---

## 🛠 Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/growthproai-backend.git
   cd growthproai-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node index.js
   ```

4. Server will run on:

   ```
   http://localhost:5000
   ```

---

## 🔒 CORS Configuration

Make sure to allow your frontend domain:

```js
app.use(
  cors({
    origin: "https://growthproaifrontend.vercel.app",
    methods: ["GET", "POST"],
  })
);
```

---
