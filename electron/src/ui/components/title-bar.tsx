// TitleBar.jsx
import { Minus, Square, X } from 'lucide-react';

export default function TitleBar() {
    return (
        <div className="flex h-10 items-center justify-between border-b border-b-sidebar-border bg-background text-primary select-none">
            {/* App title (draggable area) */}
            <div className="drag flex h-full flex-1 items-center px-4 text-sm font-medium tracking-wide">
                Checkpoint
            </div>

            {/* Window control buttons */}
            <div className="no-drag flex h-full">
                <TitleBarButton
                    icon={<Minus size={14} />}
                    onClick={() => window.electronAPI.minimize()}
                />
                <TitleBarButton
                    icon={<Square size={14} />}
                    onClick={() => window.electronAPI.maximize()}
                />
                <TitleBarButton
                    icon={<X size={14} />}
                    onClick={() => window.electronAPI.close()}
                    isClose
                />
            </div>
        </div>
    );
}

function TitleBarButton({
    icon,
    onClick,
    isClose = false,
}: {
    icon: React.ReactNode;
    onClick: () => void;
    isClose?: boolean;
}) {
    return (
        <button
            onClick={onClick}
            className={`flex h-full w-10 items-center justify-center transition-colors ${
                isClose
                    ? 'hover:bg-red-600 hover:text-white'
                    : 'hover:bg-accent hover:text-accent-foreground'
            } active:scale-95`}
        >
            {icon}
        </button>
    );
}
