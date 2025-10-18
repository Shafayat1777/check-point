import { useState } from 'react';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

import LocationSelect from './location-select';
import { RippleButton } from './ui/ripple-button';

export function AddGames({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>{children}</PopoverTrigger>
            <PopoverContent className="w-lg">
                <div className="flex flex-col gap-4">
                    <LocationSelect />

                    <div className="grid grid-cols-2 gap-4">
                        <RippleButton
                            variant="outline"
                            onClick={() => setOpen(false)}
                        >
                            Cancel
                        </RippleButton>
                        <RippleButton variant="secondary">
                            Add Location
                        </RippleButton>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
