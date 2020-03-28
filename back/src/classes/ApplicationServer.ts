import { Express, Request, Response, NextFunction } from 'express';
import { Server } from 'http';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import API from '../api';

class ApplicationServer {
  private server!: Server;
  private application!: Express;

  public async initialize(): Promise<void> {
    this.application = express();
    this.middleware();
    this.routing();
  }

  private middleware(): void {
    this.application.use(bodyParser.json({ limit: '10mb' }));
    this.application.use(bodyParser.urlencoded({ extended: false, limit: '10mb', parameterLimit: 1000000 }));
    this.application.all('*', (request: Request, response: Response, next: NextFunction) => {
      response.header("Access-Control-Allow-Origin", "*");
      response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      response.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
      response.header("Access-Control-Allow-Credentials", "true");
      next();
    });
  }

  private routing(): void {
    this.application.use('/api', API);
  }

  public open(port: number): void {
    this.server = this.application.listen(port);
  }

  public close(): void {
    this.server.close();
  }
}

export default ApplicationServer;
