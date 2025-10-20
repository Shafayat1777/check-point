import { BrowserWindow, app, dialog, ipcMain } from 'electron';
import path from 'path';

import { getPreloadPath } from './path-resolver.js';
import { isDev } from './utils.js';

app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            preload: getPreloadPath(),
        },
        frame: false,
        width: 1000,
        height: 1000,
    });
    if (isDev()) {
        mainWindow.loadURL('http://localhost:5123');
    } else {
        mainWindow.loadFile(
            path.join(app.getAppPath(), '/dist-react/index.html'),
        );
    }

    // Window control events
    ipcMain.on('window-control', (event, action) => {
        if (!mainWindow) return;
        switch (action) {
            case 'minimize':
                mainWindow.minimize();
                break;
            case 'maximize':
                if (mainWindow.isMaximized()) {
                    mainWindow.unmaximize();
                } else {
                    mainWindow.maximize();
                }
                break;
            case 'close':
                mainWindow.close();
                break;
        }
    });
});

// ✅ Add this to handle folder dialog
ipcMain.handle('select-folder', async () => {
    const result = await dialog.showOpenDialog({
        properties: ['openDirectory'],
        title: 'Select Game Save Folder',
    });

    if (result.canceled) return null;
    return result.filePaths[0];
});
