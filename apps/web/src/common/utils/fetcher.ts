import { HttpError, NetworkError } from "@/common/api/errors"

export const fetcher = async <T>(url: string, options?: RequestInit & { timeout?: number }): Promise<T> => {
  const controller = new AbortController()
  const timeoutMs = options?.timeout ?? 10000
  const id = setTimeout(() => controller.abort(), timeoutMs) //기본 10초 대기
  try {
    const res = await fetch(url, { ...options, signal: controller.signal })

    clearTimeout(id)

    //Http Error handler
    if (!res.ok) {
      let errorData: any
      let message = `HTTP error! Status: ${res.status}`
      try {
        errorData = await res.json()
        message = errorData.message || errorData.error || message
      } catch (e) {
        try {
          const text = await res.text()
          if (text) message = text
        } catch (_) { }
      }
      throw new HttpError(message, res.status)
    }

    const data: T = await res.json()
    return data
  } catch (error: any) {
    clearTimeout(id)
    // 타임아웃 및 요청 취소
    if (error.name === 'AbortError') {
      throw new HttpError(`Request to ${url} was aborted or timed out`, 408)
    }
    // 네트워크 및 fetch 자체 에러
    if (error instanceof TypeError && error.message === 'Fail to fetch') {
      throw new NetworkError()
    }
    //이 외 에러
    throw error
  }
}


