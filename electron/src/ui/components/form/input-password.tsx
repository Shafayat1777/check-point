import { useMemo, useState } from 'react';

import { CheckIcon, EyeIcon, EyeOffIcon, XIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import type { IFormControlFunc } from '@/types/form';

import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from '../ui/input-group';
import FormBase from './base';

const requirements = [
    { regex: /.{8,}/, text: 'At least 8 characters', skip: false },
    { regex: /[a-z]/, text: 'At least 1 lowercase letter', skip: false },
    { regex: /[A-Z]/, text: 'At least 1 uppercase letter', skip: false },
    { regex: /[0-9]/, text: 'At least 1 number', skip: false },
    {
        regex: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
        text: 'At least 1 special character',
        skip: false,
    },
    {
        regex: /^\S*$/,
        text: 'Must not contain spaces',
        skip: true,
    },
];

export const FormInputPassword: IFormControlFunc<{ showHelper?: boolean }> = (
    props,
) => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const strength = requirements.map((req) => ({
        met: req.regex.test(password),
        text: req.text,
        skip: req.skip,
    }));

    const strengthScore = useMemo(() => {
        return strength.filter((req) => req.met && req.skip === false).length;
    }, [strength]);

    const getColor = (score: number) => {
        if (score === 0) return 'bg-border';
        if (score <= 1) return 'bg-destructive';
        if (score <= 2) return 'bg-orange-500 ';
        if (score <= 3) return 'bg-amber-500';
        if (score === 4) return 'bg-yellow-400';

        return 'bg-green-500';
    };

    const getText = (score: number) => {
        if (score === 0) return 'Enter a password';
        if (score <= 2) return 'Weak password';
        if (score <= 3) return 'Medium password';
        if (score === 4) return 'Strong password';

        return 'Very strong password';
    };

    return (
        <>
            <FormBase {...props}>
                {(props) => (
                    <InputGroup>
                        <InputGroupInput
                            {...props}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                props.onChange(e);
                            }}
                            type={showPassword ? 'text' : 'password'}
                            className={cn(props.className)}
                        />
                        <InputGroupAddon align="inline-end" className="">
                            <InputGroupButton
                                type="button"
                                className="cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                            </InputGroupButton>
                        </InputGroupAddon>
                    </InputGroup>
                )}
            </FormBase>

            {props.showHelper && (
                <div className="">
                    <div className="mb-4 flex h-1 w-full gap-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <span
                                key={index}
                                className={cn(
                                    'h-full flex-1 rounded-full transition-all duration-500 ease-out',
                                    index < strengthScore
                                        ? getColor(strengthScore)
                                        : 'bg-border',
                                )}
                            />
                        ))}
                    </div>

                    <p className="text-foreground text-sm font-medium">
                        {getText(strengthScore)}. Must contain:
                    </p>

                    <ul className="mb-4 space-y-1.5">
                        {strength.map((req, index) => (
                            <li key={index} className="flex items-center gap-2">
                                {req.met ? (
                                    <CheckIcon className="size-4 text-green-600 dark:text-green-400" />
                                ) : (
                                    <XIcon className="text-muted-foreground size-4" />
                                )}
                                <span
                                    className={cn(
                                        'text-xs',
                                        req.met
                                            ? 'text-green-600 dark:text-green-400'
                                            : 'text-muted-foreground',
                                    )}
                                >
                                    {req.text}
                                    <span className="sr-only">
                                        {req.met
                                            ? ' - Requirement met'
                                            : ' - Requirement not met'}
                                    </span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default FormInputPassword;
