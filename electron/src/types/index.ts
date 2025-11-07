import type { ISignupSchema } from '../schema/signup.ts';
import type { ISigninSchema } from '../schema/signin.ts';

export type IUser = Omit<ISignupSchema, 'confirm_password'>;
export type ISignin = ISigninSchema

export type IAuthResponse = {
    success: boolean;
    message: string;
    user: IUser;
};

export type ISigninResponse = {
    success: boolean;
    message: string;
    user: ISignin;
};
