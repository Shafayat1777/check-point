import { Navigate, Outlet } from 'react-router';

import { authClient } from '@/lib/auth-client';

export default function ProtectedRoute() {
    const { data, isPending, isRefetching } = authClient.useSession();
    console.log(isPending, isRefetching);
    if (isPending) return <div>Loading...</div>;

    // if user not logged in, redirect to signin
    if (!data) {
        return <Navigate to="/signin" replace />;
    }

    // if logged in, render the protected page
    return <Outlet />;
}
