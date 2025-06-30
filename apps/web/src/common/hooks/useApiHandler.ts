import { fetcher } from "@/common/utils/fetcher"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { HttpError, NetworkError } from "@/common/api/errors"

export function useApiHandler() {
  const navigate = useNavigate()

  const callApi = useCallback(async <T>(url: string, options?: RequestInit & { timeout?: number }) => {
    try {
      const data = await fetcher<T>(url, options)
      return data
    }
    catch (error) {
      if (error instanceof HttpError) {
        if (error.status === 401) {
          alert('인증 정보가 만료되었습니다. 다시 로그인해주세요.');
          navigate('/login'); // react-router-dom의 navigate 사용
        } else if (error.status === 403) {
          alert('접근 권한이 없습니다.');
          navigate('/access-denied');
        } else if (error.status === 404) {
          navigate('/page-not-found');
        } else if (error.status >= 500) {
          navigate('/server-error');
        } else {
          alert(`오류 발생: ${error.message}`);
          throw error;
        }
      } else if (error instanceof NetworkError) {
        alert('네트워크 연결에 문제가 발생했습니다. 다시 시도해주세요.');
        throw error;
      } else {
        alert('알 수 없는 오류가 발생했습니다.');
        console.error(error);
        throw error;
      }
    }
  }, [navigate])

  const post = useCallback(<T>(url: string, body?: any, options?: RequestInit & { timeout?: number }) => {
    return callApi<T>(url, {
      ...options,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers
      },
      body: body ? JSON.stringify(body) : undefined
    })
  }, [callApi])

  /** READ 요청 */
  const readFetcher = useCallback(<T>(url: string, options?: RequestInit & { timeout?: number }) => {
    return callApi<T>(url, { ...options, method: 'GET' })
  }, [callApi])

  /** CREATE 요청 */
  const createFetcher = useCallback(<T>(url: string, payload: any, options?: RequestInit & { timeout?: number }) => {
    return post<T>(url, payload, options)
  }, [callApi])

  /** UPDATE 요청 */
  const updateFetcher = useCallback(<T>(url: string, payload: any, options?: RequestInit & { timeout?: number }) => {
    return post<T>(url, payload, options)
  }, [callApi])

  /** DELETE 요청 */
  const deleteFetcher = useCallback(<T>(url: string, payload?: any, options?: RequestInit & { timeout?: number }) => {
    return post<T>(url, payload, options)
  }, [callApi])

  /** Multipart/Form-data (파일 업로드) 요청 */
  const multipartFetcher = useCallback(<T>() => { }, [callApi])

  /** 청크 (Chunk) 또는 스트리밍 응답 */
  const chunkFetcher = useCallback(<T>() => { }, [callApi])

  return { callApi, createFetcher, readFetcher, updateFetcher, deleteFetcher, multipartFetcher, chunkFetcher }
}