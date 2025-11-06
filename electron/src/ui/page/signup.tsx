import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import {
    type ISignupSchema,
    SIGNUP_DEFAULT_SCHEMA,
    SIGNUP_SCHEMA,
} from '@/schema/signup';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/ui/components/ui/card';

import FormWrapper from '../components/form/form';
import FormInput from '../components/form/input';
import FormInputPassword from '../components/form/input-password';

const SignUp = () => {
    const form = useForm<ISignupSchema>({
        resolver: zodResolver(SIGNUP_SCHEMA),
        defaultValues: SIGNUP_DEFAULT_SCHEMA,
    });

    const handleClick = async (values: ISignupSchema) => {
        if (!window.electronAPI) {
            console.warn('⚠️ Not running inside Electron. Skipping API call.');
            return;
        }

        const { confirm_password, ...rest } = values;
        const data = await window.electronAPI.signup(rest);

        toast(data.message, {
            description: JSON.stringify(data.user),
        });
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Create an account</CardTitle>
                    <CardDescription>
                        Enter your details below to create your account
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <FormWrapper buttonText='Sign Up' onSubmit={form.handleSubmit(handleClick)}>
                        <FormInput
                            control={form.control}
                            name="name"
                            label="Full Name"
                            placeholder="Write your full name"
                        />
                        <FormInput
                            control={form.control}
                            name="email"
                            label="Email"
                            placeholder="Write your mail"
                        />
                        <FormInputPassword
                            control={form.control}
                            name="password"
                            label="Password"
                            placeholder="Write your password"
                        />

                        <FormInput
                            control={form.control}
                            name="confirm_password"
                            label="Confirm Password"
                            placeholder="Confirm your password"
                            type="password"
                        />
                    </FormWrapper>
                </CardContent>

                <CardFooter className="flex-col gap-2">
                    <div className="mt-2 text-center text-sm">
                        Already have an account?{' '}
                        <Link
                            to="/signin"
                            className="underline underline-offset-4"
                        >
                            Sign in
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default SignUp;
