import type {
    IAuthResponse,
    ISignin,
    ISigninResponse,
    IUser,
} from '@/types/index';

declare global {
    interface Window {
        electronAPI: {
            minimize: () => void;
            maximize: () => void;
            close: () => void;
            selectFolder: () => Promise<string | null>;
            signup: (data: IUser) => Promise<IAuthResponse>;
            signin: (data: ISignin) => Promise<ISigninResponse>;
        };
    }
}
