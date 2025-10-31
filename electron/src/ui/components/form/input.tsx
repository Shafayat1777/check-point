import { cn } from '@/lib/utils';
import type { IFormControlFunc } from '@/types/form';

import { Input } from '../ui/input';
import FormBase from './base';

export const FormInput: IFormControlFunc = (props) => (
    <FormBase {...props}>
        {(props) => <Input {...props}  className={cn(props.className)} />}
    </FormBase>
);

export default FormInput;
