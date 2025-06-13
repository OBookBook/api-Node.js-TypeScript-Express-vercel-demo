import express from "express";
import { hello } from "./api/hello";

const app = express();
const PORT = 3010;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// APIルート
app.get("/api/hello", hello);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
