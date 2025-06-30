export class HttpError extends Error {
  public status: number
  public data: any

  constructor(message: string, status: number, data?: any) {
    super(message)
    this.name = 'HttpError'
    this.status = status
    this.data = data

    Object.setPrototypeOf(this, HttpError.prototype)
  }
}