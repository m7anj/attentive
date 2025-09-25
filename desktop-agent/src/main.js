const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Create a simple HTML page
  mainWindow.loadURL('data:text/html;charset=UTF-8,' + encodeURIComponent(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Attentive - Desktop Agent</title>
        <style>
            body { font-family: Arial; padding: 20px; background: #ffffffff; text-align: center;}
            h1 { color: #333; }
            .status { padding: 10px; background: white; border-radius: 5px; margin: 10px 0; }
        </style>
    </head>
    <body>
        <h1>Attentive Desktop Agent</h1>
        <p>Toggle the switch if you want Attentive to start listening out for your name.</p>
        <input type="checkbox">
    </body>
    </html>
  `));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});