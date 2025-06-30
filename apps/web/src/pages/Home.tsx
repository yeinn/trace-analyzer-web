
import UrlForm from "@/component/UrlForm"
import UrlList from "@/component/UrlList"
import { useUrls } from "@/hooks/useUrls"


const Home = () => {
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

export default Home