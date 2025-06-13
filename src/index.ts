import express from "express";
import { hello } from "./api/hello";

const app = express();
const PORT = 3010;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// APIルート
app.get("/api/hello", hello);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
