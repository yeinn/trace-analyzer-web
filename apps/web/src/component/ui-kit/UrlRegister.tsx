import { useUrls } from "@/hooks/useUrls"
import UrlForm from "@/component/ui/UrlForm"
import UrlList from "@/component/ui/UrlList"

const UrlRegister = () => {
  const { urlData, addUrls, removeUrl } = useUrls()

  return (
    <>
      <h1>
        분석할 url 등록
      </h1>
      {/* url 추가 */}
      <UrlForm onAdd={addUrls} />
      {/* url 목록 */}
      <UrlList listData={urlData} onDelete={removeUrl} />
    </>
  )

}

export default UrlRegister