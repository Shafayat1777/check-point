import type { ISignupSchema } from '../schema/signup.ts';

export type IUser = Omit<ISignupSchema, 'confirm_password'>;

export type IAuthResponse = {
    success: boolean;
    message: string;
    user: IUser;
};
