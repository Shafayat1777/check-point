import { Download, Trash2, Upload } from 'lucide-react';

import { cn } from '@/lib/utils';
import { RippleButton } from '@/ui/components/ui/ripple-button';

import DeleteSavePopup from '../delete-save-popup';

const SaveButtonGroup = ({
    className = '',
    variant = 'default',
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
                <Upload className="text-accent" />
                Upload
            </RippleButton>
            <RippleButton
                variant={variant}
                className="rounded-none shadow-none focus-visible:z-10"
            >
                <Download className="text-secondary" />
                Download
            </RippleButton>
            <DeleteSavePopup>
                <RippleButton
                    variant={variant}
                    className="rounded-none rounded-r-md shadow-none focus-visible:z-10"
                >
                    <Trash2 className="text-primary" />
                    Delete
                </RippleButton>
            </DeleteSavePopup>
        </div>
    );
};

export default SaveButtonGroup;
