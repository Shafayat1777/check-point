import { create } from 'zustand';

import type { IUser, IUserContext } from '../../types/context';

const storedUser = localStorage.getItem('user');

export const useUser = create<IUserContext>((set) => ({
    user: storedUser ? JSON.parse(storedUser) : null,

    signIn: (user: IUser) => {
        set({ user });
        localStorage.setItem('user', JSON.stringify(user));
    },

    signUp: (user: IUser) => {
        set({ user });
        localStorage.setItem('user', JSON.stringify(user));
    },

    signOut: () => {
        set({ user: null });
        localStorage.removeItem('user');
    },
}));
