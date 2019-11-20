interface ButtonProps {
    text: string,
    onPress(): void,
    style?: any,
    uppercase?: boolean,
    fullWidth?: boolean,
    disabled?: boolean
}