import { Navigate, Outlet } from 'react-router';

import { authClient } from '@/lib/auth-client';

export default function PublicRoute() {
    const { data } = authClient.useSession();
    if (data) return <Navigate to="/" replace />;
    return <Outlet />;
}
