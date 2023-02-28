import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 4000;

app.get("/", (req: Request, res: Response) => res.send("hello"));

app.listen(process.env.PORT || port, () =>
   console.log(`Server started on http://localhost:${port}/`)
);
