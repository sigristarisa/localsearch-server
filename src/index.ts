import express from "express";
import cors from "cors";
import morgan from "morgan";
// import { getPlaceId } from "./controllers/place";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello from the root application URL");
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`\n Server is running on http://localhost:${port}\n`);
});

// app.get("/", getPlaceId);
