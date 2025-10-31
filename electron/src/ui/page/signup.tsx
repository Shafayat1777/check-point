import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

import { zodResolver } from '@hookform/resolvers/zod';

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
import { RippleButton } from '@/ui/components/ui/ripple-button';

import FormWrapper from '../components/form/form';
import FormInput from '../components/form/input';
import FormInputPassword from '../components/form/input-password';

const SignUp = () => {
    const form = useForm<ISignupSchema>({
        resolver: zodResolver(SIGNUP_SCHEMA),
        defaultValues: SIGNUP_DEFAULT_SCHEMA,
    });

    const handleClick = async (values: ISignupSchema) => {
        // const data = await window.electronAPI.signup({
        //     name: 'Shafquat',
        //     email: 'm@example.com',
        //     password: 'password',
        // });

        console.log(values);
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
                    <FormWrapper onSubmit={form.handleSubmit(handleClick)}>
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

                        {/* <FormInput
                            form={form}
                            name="email"
                            label="Email"
                            placeholder="Write your mail"
                            type="email"
                        />
                        
                        <FormInput
                            form={form}
                            name="confirm_password"
                            label="Password"
                            placeholder="Confirm password"
                            type="password"
                        /> */}
                    </FormWrapper>
                </CardContent>

                <CardFooter className="flex-col gap-2">
                    <RippleButton variant="outline" className="w-full">
                        Sign up with Google
                    </RippleButton>
                    <div className="mt-4 text-center text-sm">
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
