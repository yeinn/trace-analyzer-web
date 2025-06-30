type UrlEntry = {
    id: string
    url: string
    urlAias: string
    createdAt: number
}

type UrlListProps = {
    listData: UrlEntry[],
    onDelete: (id: string) => void
}
const UrlList = ({ listData, onDelete }: UrlListProps) => {
    if (listData.length === 0) {
        return <p>📭 아직 등록된 주소가 없습니다.</p>
    }

    return (
        <div>
            <h2>등록된 주소 목록</h2>
            <ul>
                {listData.map(({ id, urlAias, url }) => (
                    <li key={id}>
                        {urlAias?.length > 1 && `[${urlAias}]`}
                        <a href={url}>{url}</a>
                        <button onClick={() => onDelete(id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UrlList