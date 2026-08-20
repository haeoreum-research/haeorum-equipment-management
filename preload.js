// preload.js
// 이 파일은 보안을 위해 renderer 프로세스가 로드되기 전에 실행됩니다.
// Node.js API에 직접 접근할 수 없으므로, 필요시 ipcRenderer를 통해 통신합니다.

const { contextBridge } = require('electron');

// 렌더러 프로세스에서 사용할 수 있도록 노출할 API
contextBridge.exposeInMainWorld('electronAPI', {
  // 필요한 경우 여기에 API를 추가하세요
  // 예: window.electronAPI.someMethod()
});
