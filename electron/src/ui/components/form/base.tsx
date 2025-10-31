import { Controller, type FieldPath, type FieldValues } from 'react-hook-form';

import { cn } from '@/lib/utils';
import type { IFormBaseProps } from '@/types/form';

import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldLabel,
} from '../ui/field';

export default function FormBase<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
    TTransformedValues = TFieldValues,
>({
    children,
    control,
    label,
    name,
    description = '',
    placeholder = '',
    classNameField = '',
    className = '',
}: IFormBaseProps<TFieldValues, TName, TTransformedValues>) {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState }) => {
                return (
                    <Field
                        data-invalidate={fieldState.invalid}
                        className={cn('gap-1', classNameField)}
                    >
                        <FieldContent>
                            {label && (
                                <FieldLabel htmlFor={field.name}>
                                    {label}
                                </FieldLabel>
                            )}
                            {description && (
                                <FieldDescription>
                                    {description}
                                </FieldDescription>
                            )}
                        </FieldContent>
                        {children({
                            ...field,
                            id: field.name,
                            'aria-invalid': fieldState.invalid,
                            className,
                            placeholder,
                        })}
                        {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                        )}
                    </Field>
                );
            }}
        />
    );
}
