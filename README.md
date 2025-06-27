# 🕸️ trace-analyzer-web

> 작성 중인 문서입니다.

Lighthouse + Trace 기반 웹 페이지 성능 분석 도구의 프론트엔드 프로젝트입니다.  
분석할 URL을 등록하고, 정기적으로 성능 리포트를 수집/확인할 수 있는 웹 UI를 제공합니다.

---

## 🚀 주요 기능

- URL 등록 → 스케줄링 → 분석 결과 리포트
- trace-analyzer 기반 .trace.json 분석 (느린 API, blocking 리소스, Long Task 등)
- Markdown 기반 리포트 생성
- Web UI에서 분석 결과 시각화
- K8s 확장 고려한 격리 실행 구조 설계 예정


---

## 🧱 기술 스택

| 영역         | 스택                   | 비고 |
|--------------|------------------------|------|
|-|-|-|



---

## 📁 프로젝트 구조

```bash
├── apps/
│   ├── web/               # React 기반 웹 UI
│   └── server/            # Fastify 기반 API 서버
├── packages/
│   └── (공통 유틸/분석기 모듈 추후 분리 예정)
├── trace-analyzer/        # 기존 CLI 도구 (외부 레포로 분리 가능)
└── pnpm-workspace.yaml
```

---

## 🔗 관련 프로젝트

- [trace-analyzer](https://github.com/yeinn/trace-analyzer) (CLI): .trace.json 파일을 분석하는 CLI 도구

---

## 🛠 향후 계획

 - [ ] Lighthouse 분석 요청 스케줄링
- [ ] 분석 결과 저장 및 히스토리 보기
- [ ] Markdown/HTML 기반 리포트 뷰어
- [ ] Kubernetes 환경 배포 대응
- [ ] 로그인/인증/권한 관리 기능


---

## 👩‍💻 개발자

🐻gomguma
> PR 및 아이디어 기여 환영합니다!