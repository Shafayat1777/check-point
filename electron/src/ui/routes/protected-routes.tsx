import { Navigate, Outlet } from 'react-router';

import { authClient } from '@/lib/auth-client';

export default function ProtectedRoute() {
    const { data } = authClient.useSession();

    // if user not logged in, redirect to signin
    if (!data) {
        return <Navigate to="/signin" replace />;
    }

    // if logged in, render the protected page
    return <Outlet />;
}
