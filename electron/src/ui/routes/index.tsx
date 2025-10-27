import { createBrowserRouter } from 'react-router';

import Dashboard from '@/ui/page/dashboard';
import Games from '@/ui/page/games.tsx';
import Home from '@/ui/page/home.tsx';
import NotFound from '@/ui/page/not-found.tsx';
import SignIn from '@/ui/page/signin.tsx';
import SignUp from '@/ui/page/signup.tsx';

import ProtectedRoute from './protected-routes';
import PublicRoute from './public-routes';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <ProtectedRoute />,
        errorElement: <NotFound />,
        children: [
            {
                element: <Home />,
                children: [
                    {
                        index: true,
                        element: <Dashboard />,
                    },
                    {
                        path: 'games/:id',
                        element: <Games />,
                    },
                ],
            },
        ],
    },
    {
        element: <PublicRoute />,
        children: [
            { path: '/signin', element: <SignIn /> },
            { path: '/signup', element: <SignUp /> },
        ],
    },
]);
