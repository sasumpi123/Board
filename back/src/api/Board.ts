import { Router, Request, Response, NextFunction } from "express";
import { validate } from "../utils/index";
import Article from '../models/Article';

const router: Router = Router();

// 목록 조회
// [GET] localhost:8000/api/board
router.get('/',
    validate([]),
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
        const articles = await Article.find();
        response.json({ articles });
    }
);

// 생성
// [POST] localhost:8000/api/board
router.post('/',
    validate([]),
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
        const newArticle = new Article();
        newArticle.title = request.body.title;
        newArticle.content = request.body.content;
        await newArticle.save();
        response.json({});
    }
);

// 수정
// [PUT] localhost:8000/api/board
router.put('/',
    validate([]),
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
        const article = await Article.findOne({ _id: request.body._id })
        article.title = request.body.title;
        article.content = request.body.content;
        await article.save();
        response.json({});
    }
);

// 삭제
// [DELETE] localhost:8000/api/board
router.delete('/',
    validate([]),
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
        await Article.deleteOne({ _id: request.body._id });
        response.json({});
    }
);

export default router;