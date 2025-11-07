import { BrowserWindow, app } from 'electron';
import path from 'path';

import { getPreloadPath } from './path-resolver.js';
import { registerIpcHandlers } from './register-ipc-handelers.js';
import { isDev } from './utils.js';

app.whenReady().then(() => {
    // const ses = session.fromPartition('persist:auth');

    const mainWindow = new BrowserWindow({
        webPreferences: {
            preload: getPreloadPath(),
            // session: ses,
        },
        frame: true,
        width: 500,
        height: 500,
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
