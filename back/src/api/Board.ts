import { Router, Request, Response, NextFunction } from "express";
import { validate } from "../utils/index";

const router: Router = Router();

router.get('/',
    validate([]),
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
        response.json({ data: 'fuck you' });
    }
);

export default router;