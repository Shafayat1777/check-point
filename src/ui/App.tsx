import { AppSidebar } from '@/ui/components/sidebar/sidebar';
import TitleBar from '@/ui/components/title-bar';
import { SidebarProvider, SidebarTrigger } from '@/ui/components/ui/sidebar';
import { ThemeProvider } from '@/ui/context/theme-provider';
import Home from '@/ui/page/home';

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <SidebarProvider>
                <div className="fixed top-0 right-0 left-0 z-50">
                    <TitleBar />
                </div>

                <div className="flex flex-1 pt-10">
                    <AppSidebar />
                    <SidebarTrigger />
                    <div className="w-full">
                        <Home />
                    </div>
                </div>
            </SidebarProvider>
        </ThemeProvider>
    );
}

export default App;
