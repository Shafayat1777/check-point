import { AppSidebar } from '@/components/sidebar/sidebar';
import TitleBar from '@/components/title-bar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeProvider } from '@/context/theme-provider';
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
