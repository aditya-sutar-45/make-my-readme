import express, { json } from "express";
import { ExpressError } from "./utils/ExpressError.js";
import "dotenv/config";
import { generateReadme } from "./controllers/generateReadme.js";
import cors from "cors";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://make-my-readme.onrender.com"],
    credentials: true,
  })
);
app.use(json());

app.get("/", (req, res) => {
  res.send("hello world!!");
});

app.post("/generate-readme", generateReadme);

app.all(/(.*)/, (req, res, next) => {
  next(new ExpressError("Route does not exist!", 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "something went wrong!" } = err;
  res.status(statusCode).send(message);
});

app.listen(PORT, () => {
  console.log("server running on port:", PORT);
  console.log(`http://localhost:${PORT}/`);
});
