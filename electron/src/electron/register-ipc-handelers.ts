import dotenv from 'dotenv';
import { dialog, ipcMain, net } from 'electron';

import type {
    IAuthResponse,
    ISignin,
    ISigninResponse,
    IUser,
} from '../types/index.ts';

// Load env vars
dotenv.config({ path: '.env.development' });

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
            return {
                success: true,
                message: 'Signup data Received',
                user: userData,
            };
        },
    );

    ipcMain.handle(
        'auth_signin',
        async (_, userData: ISignin): Promise<ISigninResponse> => {
            try {
                const response = await net.fetch(
                    `${process.env.AUTH_API}/sign-in/email`,
                    {
                        method: 'POST',
                        body: JSON.stringify(userData),
                        headers: {
                            'Content-Type': 'application/json',
                            Origin: 'http://localhost:5123', // Required for CORS with Better Auth
                        },
                        credentials: 'include',
                    },
                );

                // Handle non-2xx status codes gracefully
                if (!response.ok) {
                    const errorJson = await response.json().catch(() => ({}));
                    return {
                        success: false,
                        message:
                            errorJson.message ||
                            `Request failed with status ${response.status}`,
                        user: userData,
                    };
                }

                // Parse success response
                const json = await response.json();
                return {
                    success: true,
                    message: json.message || 'Sign-in successful',
                    user: json.user || userData,
                };
            } catch (error: any) {
                // Handle network or unexpected errors
                console.error('Sign-in error:', error);
                return {
                    success: false,
                    message:
                        error.message || 'Network or server error occurred',
                    user: userData,
                };
            }
        },
    );
}
