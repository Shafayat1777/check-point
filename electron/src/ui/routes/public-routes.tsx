import { Navigate, Outlet } from 'react-router';

import { useUser } from '@/ui/context/auth-store';

export default function PublicRoute() {
    const { user } = useUser();
    if (user) return <Navigate to="/" replace />;
    return <Outlet />;
}
