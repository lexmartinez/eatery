interface RegisterProps {
    register: any,
    error: any,
    loading: boolean,
    doRegister(payload: any): void
}

interface RegisterState {
    email: string,
    password: string,
    rePassword: string,
    name: string,
    registerError: boolean
}