const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "https://growthproaifrontend.vercel.app",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());

const headlines = [
  "Discover why {name} is the top choice in {location}",
  "{name} – The go-to place for locals in {location}",
  "Experience excellence with {name} in {location}",
  "How {name} dominates the market in {location} – 2025 Edition",
  "2025's hottest spot: {name} in {location}",
];

function getRandomHeadline(name, location) {
  const template = headlines[Math.floor(Math.random() * headlines.length)];
  return template.replace("{name}", name).replace("{location}", location);
}

app.post("/business-data", (req, res) => {
  const { name, location } = req.body;
  const data = {
    rating: (Math.random() * 1 + 4).toFixed(1),
    reviews: Math.floor(Math.random() * 200 + 50),
    headline: getRandomHeadline(name, location),
  };
  res.json(data);
});

app.get("/regenerate-headline", (req, res) => {
  const { name, location } = req.query;
  res.json({
    headline: getRandomHeadline(name, location),
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
