'use client';

import { useEffect, useState } from 'react';

import { MoonIcon, SunIcon } from 'lucide-react';

import { Label } from '@/ui/components/ui/label';
import { Switch } from '@/ui/components/ui/switch';
import { useTheme } from '@/ui/context/theme-provider';

import { useSidebar } from './ui/sidebar';

const ThemeSwitch = () => {
    const { setTheme } = useTheme();
    const { open } = useSidebar();
    const [checked, setChecked] = useState<boolean>(true);

    useEffect(() => {
        setTheme(checked ? 'dark' : 'light');
    }, [checked, setTheme]);

    return (
        <>
            <Label htmlFor="icon-label" className="inline cursor-pointer">
                {checked ? (
                    <MoonIcon className="inline size-4" aria-hidden="true" />
                ) : (
                    <SunIcon className="inline size-4" aria-hidden="true" />
                )}
                <span className="sr-only">Toggle theme</span>
            </Label>

            <Switch
                id="icon-label"
                checked={checked}
                onCheckedChange={setChecked}
                aria-label="Toggle theme"
                className="inline"
                hidden={!open}
            />
        </>
    );
};

export default ThemeSwitch;
