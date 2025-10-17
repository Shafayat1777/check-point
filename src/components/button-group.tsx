import { ArchiveRestore, CloudAlert, DatabaseBackup } from 'lucide-react';

import { RippleButton } from '@/components/ui/ripple-button';
import { cn } from '@/lib/utils';

const ButtonGroupRipple = ({
    className = '',
    variant= 'default',
}: {
    className?: string;
    variant?:
        | 'link'
        | 'default'
        | 'destructive'
        | 'outline'
        | 'secondary'
        | 'ghost';
}) => {
    return (
        <div
            className={cn(
                'inline-flex w-fit -space-x-px rounded-md shadow-xs rtl:space-x-reverse',
                className,
            )}
        >
            <RippleButton
                variant={variant}
                className="rounded-none rounded-l-md shadow-none focus-visible:z-10"
            >
                <DatabaseBackup />
                Backup
            </RippleButton>
            <RippleButton
                 variant={variant}
                className="rounded-none shadow-none focus-visible:z-10"
            >
                <ArchiveRestore />
                Restore
            </RippleButton>
            <RippleButton
                 variant={variant}
                className="rounded-none rounded-r-md shadow-none focus-visible:z-10"
            >
                <CloudAlert />
                Sync
            </RippleButton>
        </div>
    );
};

export default ButtonGroupRipple;
