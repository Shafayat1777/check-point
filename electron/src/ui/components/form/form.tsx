import { cn } from '@/lib/utils';
import type { IFormWrapperProps } from '@/types/form';

import { Field, FieldGroup } from '../ui/field';
import { RippleButton } from '../ui/ripple-button';

const FormWrapper: React.FC<IFormWrapperProps> = ({
    className = '',
    onSubmit,
    children,
}) => {
    return (
        <form onSubmit={onSubmit}>
            <FieldGroup className={cn('gap-6',className)}>
                {children}{' '}
                <div className='flex gap-4'>
                    <Field orientation="responsive">
                        <RippleButton type="submit" className="w-full">
                            Submit
                        </RippleButton>
                    </Field>
                    <Field orientation="responsive">
                        <RippleButton type="reset" className="w-full" variant='outline'>
                            Cancel
                        </RippleButton>
                    </Field>
                </div>
            </FieldGroup>
        </form>
    );
};

export default FormWrapper;
