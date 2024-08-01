import express from 'express';
import cors from 'cors';

import errorMiddleware from './middlewares/error';

import router from './routes';

const FRONT_END_URL = process.env.FRONT_END_URL || "http://localhost:4173";

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.app.get('/', (req, res) => res.json({ ok: true }));

    this.routes();

    this.app.use(errorMiddleware);
  }

  private config():void {
    const corsOptions = {
      origin: FRONT_END_URL,
      methods: ['GET'],
      allowedHeaders: ['Content-Type'],
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
