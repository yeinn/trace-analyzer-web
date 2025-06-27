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
        return <p>📭 아직 등록된 URL이 없습니다.</p>
    }

    return (
        <ul>
            {listData.map(({ id, urlAias, url }) => (
                <li key={id}>
                    {urlAias !== '' && `[${urlAias}]`}
                    <a href={url}>{url}</a>
                    <button onClick={() => onDelete(id)}>삭제</button>
                </li>
            ))}
        </ul>
    )
}

export default UrlList