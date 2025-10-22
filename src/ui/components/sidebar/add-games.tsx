import { useState } from 'react';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/ui/components/ui/popover';

import { RippleButton } from '../ui/ripple-button';
import LocationSelect from './location-select';

export function AddGames({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>{children}</PopoverTrigger>
            <PopoverContent
                className="w-lg"
                onInteractOutside={(e) => e.preventDefault()}
            >
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
