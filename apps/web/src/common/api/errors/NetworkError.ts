export class NetworkError extends Error {
  constructor(message: string = '네트워크 연결을 확인해주세요') {
    super(message)
    this.name = 'NetworkError'
    Object.setPrototypeOf(this, NetworkError.prototype)
  }
}