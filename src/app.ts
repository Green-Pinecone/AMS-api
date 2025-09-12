import express from "express";
import employeeRouter from "./routes/MasterEmployee.routes";

const app = express();
app.use(express.json());

app.use("/employees", employeeRouter);

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

