interface Window {
    electronAPI: {
        minimize: () => void;
        maximize: () => void;
        close: () => void;
        selectFolder: () => Promise<string | null>;
    };
}