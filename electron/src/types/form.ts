import type { ReactNode } from 'react';
import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';

export type IFormWrapperProps = {
    className?: string;
    showCancel?: boolean;
    buttonText?: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
};

export type IFormBaseProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
    TTransformedValues = TFieldValues,
> = IFormControlProps<TFieldValues, TName, TTransformedValues> & {
    children: (
        field: Parameters<
            ControllerProps<TFieldValues, TName, TTransformedValues>['render']
        >[0]['field'] & {
            'aria-invalid': boolean;
            id: string;
            className?: string;
            placeholder?: string;
        },
    ) => ReactNode;
};

export type IFormControlFunc<
    ExtraProps extends Record<string, unknown> = Record<never, never>,
> = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
    TTransformedValues = TFieldValues,
>(
    props: IFormControlProps<TFieldValues, TName, TTransformedValues> &
        ExtraProps,
) => ReactNode;

export type IFormControlProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
    TTransformedValues = TFieldValues,
> = {
    // type?: React.HTMLInputTypeAttribute;
    name: TName;
    label?: ReactNode;
    description?: string;
    placeholder?: string;
    className?: string;
    classNameField?: string;
    control: ControllerProps<
        TFieldValues,
        TName,
        TTransformedValues
    >['control'];
};
