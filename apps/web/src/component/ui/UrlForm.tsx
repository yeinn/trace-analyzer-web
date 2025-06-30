import { FormEvent, useState } from "react"

type UrlFormProps = {
    onAdd: (url: string, alias: string) => void
}

const UrlForm = ({ onAdd }: UrlFormProps) => {
    const [urlVal, setUrlVal] = useState<string>('')
    const [aliasVal, setAliasVal] = useState<string>('')
    const [validMsg, setValidMsg] = useState<string>('')

    // 추가 
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setValidMsg('')

        const newValue = urlVal.trim()

        if (newValue.length === 0) {
            return setValidMsg('값을 입력하지 않았습니다.')

        } else if (!newValue.startsWith('http')) {
            return setValidMsg('http로 시작하는 도메인 주소를 입력하세요.')
        }

        onAdd(newValue, aliasVal)
        setUrlVal('')
        setAliasVal('')
    }

    return (
        <form>
            <div>
                <span>테스트 주소 </span>
                <input placeholder={'url 을 입력하세요...'} value={urlVal} onChange={(e) => {
                    setValidMsg('')
                    setUrlVal(e.target.value)
                }}>
                </input>
                <span>별칭 </span>
                <input value={aliasVal} onChange={(e) => setAliasVal(e.target.value)}></input>
                <button type="submit" onClick={handleSubmit}>+ 추가</button>
                {(validMsg !== '') && <div style={{ color: 'red' }}>{validMsg}</div>}
            </div>

        </form>
    )
}

export default UrlForm