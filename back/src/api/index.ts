import { Router } from "express";
import BoardAPI from './Board';

const router: Router = Router();

router.use('/board', BoardAPI);

export default router;