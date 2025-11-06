import { cn } from '@/lib/utils';
import type { IFormControlFunc } from '@/types/form';

import { Input } from '../ui/input';
import FormBase from './base';

export const FormInput: IFormControlFunc<{
    type?: 'email' | 'password' | 'text' | 'number' | 'url';
}> = (props) => (
    <FormBase {...props}>
        {(baseProps) => (
            <Input {...baseProps} className={cn(baseProps.className)} type={props.type} />
        )}
    </FormBase>
);

export default FormInput;
