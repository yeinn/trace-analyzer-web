import { useEffect } from "react"
import { useState } from "react"
import UrlForm from "@/component/UrlForm"
import UrlList from "@/component/UrlList"

type UrlEntry = {
    id: string
    url: string
    urlAias: string
    createdAt: number
}

const LOCAL_STORAGE_KEY = 'analyzer-url'

const App = () => {
    const [urls, setUrls] = useState<UrlEntry[]>([])

    useEffect(() => {
        const savedUrl = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (savedUrl) {
            setUrls(JSON.parse(savedUrl))
        }
    }, [])

    //url 추가
    const handleClickUrlAdd = (url: string, alias: string) => {
        const newEntry: UrlEntry = {
            id: crypto.randomUUID(),
            url,
            urlAias: alias,
            createdAt: Date.now()
        }

        const updateData = [...urls, newEntry]
        console.log(`handleClickUrlAdd: ${updateData}`)

        setUrls(updateData)
        save(updateData)
    }

    //url 삭제
    const handleClickUrlDelete = (id: string) => {
        const updateData = urls.filter((entry) => entry.id !== id)

        console.log(`handleClickUrlDelete: ${updateData}`)
        setUrls(updateData)
        save(updateData)
    }

    //local storage 저장
    const save = (newData: UrlEntry[]) => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newData))
    }

    return (
        <main>
            <h1>
                분석할 url 등록
            </h1>
            {/* url 추가 */}
            <UrlForm onAdd={handleClickUrlAdd} />
            {/* url 목록 */}
            <UrlList listData={urls} onDelete={handleClickUrlDelete} />
        </main>
    )

}

export default App