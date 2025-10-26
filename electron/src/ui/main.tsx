import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router/dom';

import { ThemeProvider } from '@/ui/context/theme-provider';

import TitleBar from './components/title-bar.tsx';
import { Toaster } from './components/ui/sonner';
import './index.css';
import { router } from './routes/index.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="fixed top-0 right-0 left-0 z-50">
                <TitleBar />
            </div>
            <RouterProvider router={router} />
            <Toaster />
        </ThemeProvider>
    </StrictMode>,
);
