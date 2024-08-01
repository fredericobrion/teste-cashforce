import express from "express";
import cors from "cors";

import errorMiddleware from "./middlewares/error";

import router from "./routes";

const FRONT_END_URL_DEV =
  process.env.FRONT_END_URL_DEV || "http://localhost:5173";
const FRONT_END_URL_BUILD =
  process.env.FRONT_END_URL_BUILD || "http://localhost:4173";

const allowedOrigins = [FRONT_END_URL_BUILD, FRONT_END_URL_DEV];

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.app.get("/", (req, res) => res.json({ ok: true }));

    this.routes();

    this.app.use(errorMiddleware);
  }

  private config(): void {
    const corsOptions = {
      origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
        if (origin && allowedOrigins.indexOf(origin) !== -1 || !origin) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      methods: ["GET"],
      allowedHeaders: ["Content-Type"],
    };
    this.app.use(express.json());
    this.app.use(cors(corsOptions));
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }

  private routes(): void {
    this.app.use(router);
  }
}

export { App };
