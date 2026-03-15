# 🌊 완도 워케이션 센터

바다 위의 영감, 일과 쉼의 경계에서

## 🚀 GitHub Pages 배포 가이드

### 사전 준비

- [Git](https://git-scm.com/) 설치
- [Node.js](https://nodejs.org/) 18+ 설치
- [GitHub](https://github.com/) 계정

---

### Step 1. GitHub에 새 레포지토리 만들기

1. https://github.com/new 접속
2. Repository name: `wando-workation` 입력
3. **Public** 선택
4. "Create repository" 클릭

---

### Step 2. 로컬에서 프로젝트 초기화 및 푸시

터미널(Mac) 또는 명령 프롬프트에서:

```bash
# 프로젝트 폴더로 이동
cd wando-workation

# Git 초기화
git init
git add .
git commit -m "완도 워케이션 센터 홈페이지"

# GitHub 연결 (아래 YOUR_USERNAME을 본인 계정으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/wando-workation.git
git branch -M main
git push -u origin main
```

---

### Step 3. GitHub Pages 활성화

1. GitHub 레포지토리 페이지 → **Settings** 탭
2. 좌측 메뉴에서 **Pages** 클릭
3. **Source** 항목에서 **GitHub Actions** 선택
4. 저장 → 자동으로 배포가 시작됩니다

---

### Step 4. 배포 확인

- 레포지토리의 **Actions** 탭에서 빌드 진행상황 확인
- 완료되면 아래 주소로 접속:

```
https://YOUR_USERNAME.github.io/wando-workation/
```

---

## 💻 로컬 개발 (미리보기)

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

---

## 📁 프로젝트 구조

```
wando-workation/
├── .github/workflows/deploy.yml  ← GitHub Actions 자동배포
├── src/
│   ├── main.jsx                  ← React 진입점
│   └── WandoWorkation.jsx        ← 메인 컴포넌트 (이미지 포함)
├── index.html
├── vite.config.js
└── package.json
```

---

## ⚙️ 커스터마이징

- **연락처 변경**: `WandoWorkation.jsx`에서 "061-555-0000", "hello@wando-work.kr" 검색 후 수정
- **요금 변경**: "270,000", "490,000", "1,500,000" 검색 후 수정
- **레포 이름 변경 시**: `vite.config.js`의 `base` 값을 레포 이름에 맞게 수정

---

## 📝 라이선스

© 2026 완도 워케이션 센터
