import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { ThemeProvider } from '@/context/theme-provider';

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="">
                <ModeToggle />
                <Button>Click me</Button>
            </div>
        </ThemeProvider>
    );
}

export default App;
