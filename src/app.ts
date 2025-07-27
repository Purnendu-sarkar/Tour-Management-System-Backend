import cors from "cors";
import express, { Request, Response } from "express";
import expressSession from "express-session";

import { globalErrorHandler } from "./App/middlewares/globalErrorHandler";
import { router } from "./App/routes";
import notFound from "./App/middlewares/notFound";
import cookieParser from "cookie-parser";

import { envVars } from "./App/config/env";
import "./App/config/passport";
import passport from "passport";





const app = express()


app.use(expressSession({
    secret: envVars.EXPRESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(cookieParser());
app.use(express.json())
app.use(cors())

app.use("/api/v1", router)





app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome to Tour Management System Backend"
    })
})


app.use(globalErrorHandler)
app.use(notFound)

export default app