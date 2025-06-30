📄 apps/server/README.md
md
복사
편집
# 🛠 trace-analyzer server

Fastify 기반의 백엔드 API 서버입니다.  
사용자가 등록한 웹 페이지 URL에 대해 Lighthouse 분석을 실행하고,  
결과를 JSON 또는 HTML 리포트 형태로 제공합니다.

---

## 🚀 주요 기능

| 기능 | 설명 |
|------|------|
| 🔍 URL 분석 | `/analyze` API를 통해 Lighthouse 실행 |
| ⚙️ Fastify 기반 | 경량 서버 프레임워크, 향후 BFF 또는 API 확장 용이 |
| 🧪 테스트 요청 | Thunder Client, REST Client, curl 등으로 가능 |
| 📤 결과 반환 | Lighthouse JSON 구조 (점수, 메트릭 등 포함) |

---

## 📦 설치 및 실행

```bash
cd apps/server
pnpm install
pnpm dev
```
> 기본 포트는 4000이며, CORS는 localhost:5173 등 FE에서 접근 가능하도록 허용됨 (개발 중)



