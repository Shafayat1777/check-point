import type { IAuthResponse, IUser } from '@/types/index';

declare global {
    interface Window {
        electronAPI: {
            minimize: () => void;
            maximize: () => void;
            close: () => void;
            selectFolder: () => Promise<string | null>;
            signup: (data: IUser) => Promise<IAuthResponse>;
            signin: (data: IUser) => Promise<IUser>;
        };
    }
}
