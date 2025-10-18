import { useId } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { RippleButton } from './ui/ripple-button';

const LocationSelect = () => {
    const id = useId();

    return (
        <div className="w-full space-y-2">
            <Label htmlFor={id}>Add game save location</Label>
            <div className="flex rounded-md shadow-xs">
                <Input
                    id={id}
                    type="email"
                    placeholder="Location..."
                    className="-me-px rounded-r-none shadow-none focus-visible:z-1"
                />
                <RippleButton className="rounded-l-none">
                    Brows location
                </RippleButton>
            </div>
        </div>
    );
};

export default LocationSelect;
