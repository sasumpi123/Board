import { Router, Request, Response, NextFunction } from "express";
import { validate } from "../utils/index";
import Article from '../models/Article';

const router: Router = Router();

router.get('/',
    validate([]),
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
        response.json({ data: '' });
    }
);

export default router;