import cors from "cors";
import express, { Request, Response } from "express";
import { globalErrorHandler } from "./App/middlewares/globalErrorHandler";
import { router } from "./App/routes";


const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/v1", router)


app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome to Tour Management System Backend"
    })
})


app.use(globalErrorHandler)

export default app