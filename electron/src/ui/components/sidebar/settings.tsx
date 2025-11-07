import { Navigate } from 'react-router';

import { LogOut } from 'lucide-react';

import { authClient } from '@/lib/auth-client';

import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { RippleButton } from '../ui/ripple-button';

const Setting = ({ children }: { children: React.ReactNode }) => {
    const handleSignout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    <Navigate to="/signin" replace />;
                },
            },
        });
    };

    return (
        <Popover>
            <PopoverTrigger asChild>{children}</PopoverTrigger>
            <PopoverContent className="w-60">
                <RippleButton
                    type="button"
                    className="w-full cursor-pointer"
                    onClick={() => handleSignout()}
                >
                    <LogOut />
                    Sign out
                </RippleButton>
            </PopoverContent>
        </Popover>
    );
};

export default Setting;
