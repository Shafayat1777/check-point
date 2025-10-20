// TitleBar.jsx
export default function TitleBar() {
    return (
        <div className="flex h-10 items-center justify-between bg-gray-900 text-white select-none">
            <div className="drag flex h-full flex-1 items-center px-3">
                My App
            </div>

            <div className="no-drag  flex space-x-1">
                <button onClick={() => window.electronAPI.minimize()}>_</button>
                <button onClick={() => window.electronAPI.maximize()}>☐</button>
                <button onClick={() => window.electronAPI.close()}>X</button>
            </div>
        </div>
    );
}
