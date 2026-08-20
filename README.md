# 비품관리대장 - Electron Desktop Application

Vanilla HTML/CSS/JavaScript로 제작된 비품관리 웹 애플리케이션을 Electron 기반의 데스크톱 애플리케이션으로 변환했습니다.

## 📋 프로젝트 구조

```
equipment-management/
├── index.html           # 메인 HTML 파일
├── styles.css           # 스타일시트
├── script.js            # 메인 로직
├── main.js              # Electron 메인 프로세스
├── preload.js           # 보안 레이어
├── package.json         # 프로젝트 설정
├── assets/              # 아이콘 등 리소스
│   ├── icon.png         # 기본 아이콘
│   ├── icon.ico         # Windows 아이콘
│   └── icon.icns        # macOS 아이콘
└── README.md            # 이 파일
```

## 🚀 설치 및 실행

### 1. 필요한 패키지 설치

```bash
npm install
```

### 2. 개발 모드로 실행 (DevTools 포함)

```bash
npm start
```

### 3. 실행 중 DevTools 토글

**F12** 키를 눌러 개발자 도구 열기/닫기

## 🔨 빌드 방법

### Windows .exe 만들기 (Windows에서만 가능)

```bash
npm run build:win
```

결과: `dist/비품관리대장 Setup.exe`

### macOS .app/.dmg 만들기 (macOS에서만 가능)

```bash
npm run build:mac
```

결과: `dist/비품관리대장.app` 및 `dist/비품관리대장.dmg`

### 현재 OS에 맞는 빌드

```bash
npm run build
```

## 💻 설치 및 배포

### Windows에서 .exe 배포

1. Windows 컴퓨터에서 `npm run build:win` 실행
2. `dist/비품관리대장 Setup.exe` 파일 생성
3. 이 파일을 다른 Windows 컴퓨터로 복사
4. 대상 컴퓨터에서 `.exe` 파일 실행 후 설치

### macOS에서 .app/.dmg 배포

#### .app 파일 방식:
1. macOS에서 `npm run build:mac` 실행
2. `dist/비품관리대장.app` 폴더를 다른 Mac으로 복사
3. 대상 Mac의 Applications 폴더에 붙여넣기
4. Finder에서 실행

#### .dmg 이미지 방식:
1. `dist/비품관리대장.dmg` 파일을 다른 Mac으로 복사
2. `.dmg` 더블클릭
3. Applications 폴더로 드래그

## 📁 생성된 파일 설명

### main.js
- Electron 메인 프로세스
- 윈도우 생성 및 관리
- 메뉴 구성
- 크기: 1400x900 (최소 1000x700)

### preload.js
- 보안 계층
- Node.js와 렌더러 간 통신 중개
- contextBridge를 통해 API 노출

### package.json
- npm 스크립트 정의
- Electron 및 electron-builder 설정
- 빌드 설정 (Windows NSIS, macOS .app/.dmg)

### README.md
- 설치 및 사용 가이드
- 빌드 방법
- 트러블슈팅

## 🔒 보안 설정

- nodeIntegration: false
- contextIsolation: true
- sandbox: true

## ❓ 자주 묻는 질문

**Q: Windows와 macOS 모두에서 빌드할 수 있나요?**
A: 아니요, 각 OS에서 해당 OS용 빌드를 만들어야 합니다. 다만 만든 설치파일은 다른 같은 OS 컴퓨터에서 실행 가능합니다.

**Q: DevTools를 최종 빌드에서도 사용할 수 있나요?**
A: 기본적으로는 불가능하지만, main.js의 설정을 변경하여 가능하게 할 수 있습니다.

**Q: 아이콘은 어떻게 설정하나요?**
A: `assets/` 폴더에 다음 파일을 준비하세요:
- icon.png (256x256)
- icon.ico (Windows)
- icon.icns (macOS)

**Q: macOS에서 "앱을 열 수 없음" 오류가 나요**
A: 다음을 실행하세요:
```bash
sudo xattr -rd com.apple.quarantine /Applications/비품관리대장.app
```

## 📄 라이선스

MIT License
