import express from 'express';
import cors from 'cors';
// import 'express-async-errors';

import errorMiddleware from './middlewares/error';

import router from './routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota!
    this.app.get('/', (req, res) => res.json({ ok: true }));

    this.routes();

    // Não remova esse middleware de erro, mas fique a vontade para customizá-lo
    // Mantenha ele sempre como o último middleware a ser chamado
    this.app.use(errorMiddleware);
  }

  private config():void {
    const corsOptions = {
      origin: 'http://localhost:5173',
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

// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
export const { app } = new App();
