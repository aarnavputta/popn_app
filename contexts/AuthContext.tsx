import { createContext } from "react";

type responseType = {
    approved: boolean,
    message: string
};

const AuthContext = createContext<{
    authenticated: boolean,
    setAuthenticated: (authenticated: boolean) => void,
    username: string,
    setUsername: (user: string) => void,
    logIn: (user: string, pass: string) => Promise<responseType>,
    signUp: (user: string, pass: string) => Promise<responseType>,
    logOut: () => void
} | null>(null);

export { responseType, AuthContext };
