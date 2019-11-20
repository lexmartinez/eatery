import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../config/Constant';
import { getResponsiveStyle, Platform } from '../../../config/Utilities';

const titleSize = Platform.select({ ios: 45, android: 50 })
const textSize = Platform.select({ ios: 14, android: 18 })

export default StyleSheet.create(getResponsiveStyle({
    main: {
        flex: 1,
        backgroundColor: Colors.primary_white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    container: {
        alignItems: 'center',
        paddingBottom: Platform.select({ android: 60, ios: 80 })
    },
    title: {
        color: Colors.primary_grey,
        fontFamily: Fonts.BOLD,
        fontSize: titleSize,
        lineHeight: titleSize,
        marginBottom: 15,
        textAlign: 'center'
    },
    text: {
        color: Colors.primary_grey,
        fontFamily: Fonts.MEDIUM,
        fontSize: textSize,
        lineHeight: textSize,
        textAlign: 'center'
    },
    image: {
        height: 190,
        width: 280,
        marginBottom: 10
    },
    imageContainer: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Platform.select({ ios: 70, android: 45 }),
        marginBottom: 15,
        paddingHorizontal: 30
    },
    close: {
        position: 'absolute',
        right: 30,
        top: Platform.select({ ios: 70, android: 50 })
    }
}));