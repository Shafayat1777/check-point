import { Navigate, Outlet } from 'react-router';

import { authClient } from '@/lib/auth-client';

export default function PublicRoute() {
    const { data, isPending } = authClient.useSession();

    if (isPending) return <div>Loading...</div>;

    if (data) return <Navigate to="/" replace />;
    return <Outlet />;
}
