import { Request, Response, NextFunction } from "express";
import { validationResult, ValidationChain, Result, ValidationError } from 'express-validator';

const validate = (validations: Array<ValidationChain>) => {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        await Promise.all(validations.map((validation: ValidationChain) => validation.run(req)));

        const errors: Result<ValidationError> = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        res.status(422).json({ errors: errors.array() });
    };
};

export { validate };