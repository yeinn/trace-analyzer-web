import { useEffect, useState } from "react"
import { useApiHandler } from "@/common/hooks/useApiHandler"
import { API_URLS } from "@/common/api/apiUrls"

type UrlEntry = {
  id: string
  url: string
  urlAias: string
  createdAt: number
}

export const useUrls = () => {
  const { readFetcher, createFetcher, updateFetcher, deleteFetcher } = useApiHandler();
  const [data, setData] = useState<UrlEntry[]>([])

  //url 조회
  const getUrls = async () => {
    const data = await readFetcher<UrlEntry[]>(API_URLS.urls.read)
    console.log(`getUrls ::${data}`)

    if (data) {
      setData(data)
    }
  }

  //url 추가
  const add = async (url: string, alias: string) => {
    try {
      const newEntry = {
        url,
        urlAias: alias,
      }

      const res = await createFetcher<UrlEntry>(API_URLS.urls.create, newEntry)
      getUrls()

      return res
    }
    catch (e) {
      console.error(`Failed to Add Url`)
    }
  }

  //url 삭제
  const remove = (id: string) => {
    const updateData = data.filter((entry) => entry.id !== id)

    getUrls()
  }

  //init
  useEffect(() => {
    getUrls()
  }, [])

  return { urlData: data, getUrls, addUrls: add, removeUrl: remove }
}