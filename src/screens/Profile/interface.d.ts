interface ProfileProps {
    user: any,
    loading: boolean,
    error: boolean,
    getProfile(): void,
    doLogout(callback: any): void
}