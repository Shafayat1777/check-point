import { useId, useState } from 'react';

import { Input } from '@/ui/components/ui/input';
import { Label } from '@/ui/components/ui/label';

import { RippleButton } from '../ui/ripple-button';

const LocationSelect = () => {
    const id = useId();
    const [folderPath, setFolderPath] = useState('');

    const handleBrowse = async () => {
        try {
            const selectedPath = await window.electronAPI.selectFolder();
            if (selectedPath) setFolderPath(selectedPath);
        } catch (error) {
            console.error('Error selecting folder:', error);
        }
    };

    return (
        <div className="w-full space-y-2">
            <Label htmlFor={id}>Add game save location</Label>
            <div className="flex rounded-md shadow-xs">
                <Input
                    id={id}
                    type="text"
                    placeholder="Location..."
                    className="-me-px rounded-r-none shadow-none focus-visible:z-1"
                    value={folderPath}
                    readOnly
                />
                <RippleButton className="rounded-l-none" onClick={handleBrowse}>
                    Browse location
                </RippleButton>
            </div>
        </div>
    );
};

export default LocationSelect;
