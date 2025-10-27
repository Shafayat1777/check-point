// components/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router';

import { useUser } from '@/ui/context/auth-store';

export default function ProtectedRoute() {
    const { user } = useUser();

    // if user not logged in, redirect to signin
    if (!user) {
        return <Navigate to="/signin" replace />;
    }

    // if logged in, render the protected page
    return <Outlet />;
}
