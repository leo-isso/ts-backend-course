import { 
    Request, 
    Response, 
    RequestHandler, 
    ErrorRequestHandler, 
    NextFunction 
} from "express";

export function errorHandlerApi(
    err: ErrorRequestHandler, 
    req: Request, 
    res: Response, 
    next: NextFunction
    ) {
    console.error(`API error happened: ${err}`)
    res.status(500).json({
        errorCode: "ERR-001",
        message: "Intern Error"
    })
}