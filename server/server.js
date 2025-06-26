import express, { json } from "express";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(json());

app.get("/", (req, res) => {
  res.send("hello world!!");
});

app.listen(PORT, () => {
  console.log("server running on port:", PORT);
  console.log(`http://localhost:${PORT}/`);
});
