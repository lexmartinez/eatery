interface LoginProps {
    login: any,
    error: any,
    loading: boolean,
    doLogin(payload: any): void
}

interface LoginState {
    email: string,
    password: string,
    loginError: boolean
}