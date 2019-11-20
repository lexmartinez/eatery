import { StyleSheet } from 'react-native';
import { Colors, Fonts } from './config/Constant';
import { getResponsiveStyle, Platform } from './config/Utilities';

const tabBarHeight = Platform.select({ iosx: 48 , ios: 60, android: 60 })
export default StyleSheet.create(getResponsiveStyle({
    tabBar:{
        height: tabBarHeight,
        backgroundColor: Colors.primary_white,
        elevation: 10,
        shadowOffset: { width: 0, height: -1 },
        shadowColor: Colors.soft_grey,
        shadowOpacity: 0.85,
        shadowRadius: 3,
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        borderTopWidth: 0
    },
    tabLabel: {
        fontFamily: Fonts.SEMIBOLD,
        marginTop: Platform.select({ iosx: -5, ios: -10, android: -5 }),
    },
    tab: {
        marginTop: Platform.select({ iosx: 10, ios: 0, android: 5 }),
        height: tabBarHeight,
        paddingBottom: Platform.select({ iosx: 0, ios: 5, android: 10 })
    }
}));