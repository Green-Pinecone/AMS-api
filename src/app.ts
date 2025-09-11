import express from "express";
import employeeRoutes from "./routes/Employee.routes";

const app = express();
app.use(express.json());

app.use("/employees", employeeRoutes);

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

