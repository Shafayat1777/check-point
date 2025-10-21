import { BrowserWindow, app } from 'electron';
import path from 'path';

import { getPreloadPath } from './path-resolver.js';
import { registerIpcHandlers } from './register-ipc-handelers.js';
import { isDev } from './utils.js';

app.whenReady().then(() => {
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

    registerIpcHandlers(mainWindow);
});
