import type { IAuthResponse } from '../types';

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    selectFolder: () => ipcRenderer.invoke('select-folder'),
    minimize: () => ipcRenderer.send('window-control', 'minimize'),
    maximize: () => ipcRenderer.send('window-control', 'maximize'),
    close: () => ipcRenderer.send('window-control', 'close'),
    signup: (data) => ipcRenderer.invoke('auth_signup', data),
    signin: (data) => ipcRenderer.invoke('auth_signin', data),
} satisfies Window['electronAPI']);
