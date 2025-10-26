
import { toast } from 'sonner';


export const toastTrigger = ({}) => {
    toast.success('Action completed successfully!', {
        style: {
            '--normal-bg':
                'color-mix(in oklab, light-dark(var(--color-green-600), var(--color-green-400)) 10%, var(--background))',
            '--normal-text':
                'light-dark(var(--color-green-600), var(--color-green-400))',
            '--normal-border':
                'light-dark(var(--color-green-600), var(--color-green-400))',
        } as React.CSSProperties,
    });
};


