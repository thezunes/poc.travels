import { Request, Response } from "express"
import { travels } from "../schemas/schemas"

export function validateSchema() {
    return (req: Request, res: Response, next) => {
        const validation = travels.validate(req.body, { abortEarly: false })

        if(validation.error){
            const errors = validation.error.details.map(detail => detail.message)
            return res.status(422).send(errors)
        }

        next()
    }
}