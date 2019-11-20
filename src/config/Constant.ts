import { PERMISSIONS } from 'react-native-permissions';

export const Colors = {
    primary_white: '#ffffff',
    primary_grey: '#2e3030',
    secondary_white: '#f2f2f2',
    secondary_grey: '#6b6b6b',
    primary_green: '#00b087',
    secondary_green: '#b2d6cc',
    soft_green: '#e7f6f2',
    soft_grey: '#d1d1d1',
    secondary_blue: '#dcf2fe',
    primary_red: '#b53737'
}

export const Fonts = {
    SEMIBOLD: 'Raleway-SemiBold',
    REGULAR: 'Raleway-Regular',
    THIN: 'Raleway-Thin',
    LIGHT: 'Raleway-Light',
    MEDIUM: 'Raleway-Medium',
    BOLD: 'Raleway-Bold',
    BLACK: 'Raleway-Black'
}

export const Permissions = {
    LOCATION: {
        ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
    }
}

export const storageKeys = {
    USER_ID: '@userId'
}