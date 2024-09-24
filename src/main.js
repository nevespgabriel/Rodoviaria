import "dotenv/config";
import express from "express";
const app = express();

app.use(express.json());

app.listen(process.env.API_PORT, () => {
    console.log(`Server running at ${process.env.API_PORT} port.`);
})

