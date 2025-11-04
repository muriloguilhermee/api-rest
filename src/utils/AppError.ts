export class AppError {
    message: string
    stausCode: number

    constructor(message: string, statusCode: number = 400){
        this.message = message
        this.stausCode = statusCode
    }
}