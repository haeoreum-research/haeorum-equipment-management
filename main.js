const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1000,
    minHeight: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      sandbox: true
    }
  });

  // 로컬 파일을 로드
  const startUrl = path.join(__dirname, 'index.html');
  mainWindow.loadFile(startUrl);

  // 개발 모드에서만 DevTools 오픈
  if (process.argv.includes('--dev')) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// 앱이 준비되면 윈도우 생성
app.on('ready', () => {
  createWindow();
  createMenu();
});

// macOS에서 독 아이콘 클릭 시 앱 재활성화
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// 모든 윈도우가 닫히면 앱 종료 (macOS 제외)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// 애플리케이션 메뉴 설정
function createMenu() {
  const template = [
    {
      label: '파일',
      submenu: [
        {
          label: '종료',
          accelerator: 'CmdOrCtrl+Q',
          click: () => {
            app.quit();
          }
        }
      ]
    },
    {
      label: '편집',
      submenu: [
        { label: '실행취소', accelerator: 'CmdOrCtrl+Z', selector: 'undo:' },
        { label: '다시실행', accelerator: 'CmdOrCtrl+Shift+Z', selector: 'redo:' },
        { type: 'separator' },
        { label: '잘라내기', accelerator: 'CmdOrCtrl+X', selector: 'cut:' },
        { label: '복사', accelerator: 'CmdOrCtrl+C', selector: 'copy:' },
        { label: '붙여넣기', accelerator: 'CmdOrCtrl+V', selector: 'paste:' }
      ]
    },
    {
      label: '보기',
      submenu: [
        {
          label: 'DevTools 토글',
          accelerator: 'F12',
          click: () => {
            if (mainWindow) {
              mainWindow.webContents.toggleDevTools();
            }
          }
        }
      ]
    },
    {
      label: '도움말',
      submenu: [
        {
          label: '비품관리대장 정보',
          click: () => {
            // 정보 다이얼로그를 표시할 수 있습니다
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}
