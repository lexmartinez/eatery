interface SearchProps {
    error: any,
    loading: boolean,
    doSearch(payload: any, callback: any): void
}

interface SearchState {
    city: string
}
