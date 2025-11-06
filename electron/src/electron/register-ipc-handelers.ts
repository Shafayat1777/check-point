import { dialog, ipcMain } from 'electron';

import type { IAuthResponse, IUser } from '../types/index.ts';

export function registerIpcHandlers(mainWindow: Electron.BrowserWindow) {
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

    ipcMain.handle('select-folder', async () => {
        const result = await dialog.showOpenDialog({
            properties: ['openDirectory'],
            title: 'Select Game Save Folder',
        });
        return result.canceled ? null : result.filePaths[0];
    });

    ipcMain.handle(
        'auth_signup',
        async (_, userData: IUser): Promise<IAuthResponse> => {
            console.log(userData.name);
            return {
                success: true,
                message: 'Signup data Received',
                user: userData,
            };
        },
    );

    ipcMain.handle('auth_signin', async (_, userData) => {
        return {
            success: true,
            message: 'Signin data Received',
            data: userData,
        };
    });
}
