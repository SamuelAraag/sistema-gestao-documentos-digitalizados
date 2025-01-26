const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true, // Mantenha isso como true para segurança
      nodeIntegration: false, // Mantenha isso como false para segurança
      sandbox: true, // Adiciona uma camada extra de segurança
      preload: path.join(__dirname, 'preload.js') // Adicione um arquivo preload.js se necessário
    },
  });

  // Carrega o arquivo index.html do build do Angular
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'dist/electron-app/browser/index.html'),
      protocol: 'file:',
      slashes: true,
    })
  );

  // Abre o DevTools (opcional, apenas para desenvolvimento)
  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Quando o Electron estiver pronto, cria a janela
app.whenReady().then(createWindow);

// Fecha o aplicativo quando todas as janelas são fechadas (exceto no macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Reabre a janela no macOS quando o ícone do app é clicado e não há janelas abertas
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});