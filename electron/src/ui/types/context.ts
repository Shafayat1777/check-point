export type IUser = {
    id?: string;
    name: string;
    email: string;
};

export type IUserContext = {
    user: IUser | null;
    signIn: (user: IUser) => void;
    signUp: (user: IUser) => void;
    signOut: () => void;
};
