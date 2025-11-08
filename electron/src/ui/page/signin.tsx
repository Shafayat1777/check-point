import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';

import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import {
    type ISigninSchema,
    SIGNIN_DEFAULT_SCHEMA,
    SIGNIN_SCHEMA,
} from '@/schema/signin';
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

const SignIn = () => {
    const navigate = useNavigate();

    const form = useForm<ISigninSchema>({
        resolver: zodResolver(SIGNIN_SCHEMA),
        defaultValues: SIGNIN_DEFAULT_SCHEMA,
    });

    const handleClick = async (value: ISigninSchema) => {
        if (!window.electronAPI) {
            console.warn('⚠️ Not running inside Electron. Skipping API call.');
            return;
        }

        const data = await window.electronAPI.signin(value);

        if (data.success) {
            toast.success(data.message);
            navigate('/', { replace: true });
        } else {
            toast.error(data.message);
        }
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FormWrapper
                        buttonText="Sign In"
                        onSubmit={form.handleSubmit(handleClick)}
                    >
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
                    </FormWrapper>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{' '}
                        <Link
                            to="/signup"
                            className="underline underline-offset-4"
                        >
                            Sign up
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default SignIn;
