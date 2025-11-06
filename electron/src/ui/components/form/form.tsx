import { cn } from '@/lib/utils';
import type { IFormWrapperProps } from '@/types/form';

import { Field, FieldGroup } from '../ui/field';
import { RippleButton } from '../ui/ripple-button';

const FormWrapper: React.FC<IFormWrapperProps> = ({
    className = '',
    showCancel = false,
    buttonText = 'Submit',
    onSubmit,
    children,
}) => {
    return (
        <form onSubmit={onSubmit}>
            <FieldGroup className={cn('gap-4', className)}>
                {children}
                <div className="flex gap-4">
                    <Field>
                        <RippleButton type="submit" className="w-full">
                            {buttonText}
                        </RippleButton>
                    </Field>

                    {showCancel && (
                        <Field>
                            <RippleButton
                                type="reset"
                                className="w-full"
                                variant="outline"
                            >
                                Cancel
                            </RippleButton>
                        </Field>
                    )}
                </div>
            </FieldGroup>
        </form>
    );
};

export default FormWrapper;
