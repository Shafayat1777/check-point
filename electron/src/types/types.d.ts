interface Window {
    electronAPI: {
        minimize: () => void;
        maximize: () => void;
        close: () => void;
        selectFolder: () => Promise<string | null>;
        signup: (data: IUser) => Promise<IUser>;
        signin: (data: IUser) => Promise<IUser>;
    };
}
