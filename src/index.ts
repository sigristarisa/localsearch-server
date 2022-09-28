import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`\n Server is running on http://localhost:${port}\n`);
});
