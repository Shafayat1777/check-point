import { AppSidebar } from '@/components/sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeProvider } from '@/context/theme-provider';
import Home from '@/ui/page/home';

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <SidebarProvider>
                <AppSidebar />
                <SidebarTrigger />
                <div className='w-full'>
                    <Home />
                </div>
            </SidebarProvider>
        </ThemeProvider>
    );
}

export default App;
