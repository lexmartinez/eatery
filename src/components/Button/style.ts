import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../config/Constant';
import { getResponsiveStyle, Platform } from '../../config/Utilities';

const buttonHeight = Platform.select({ ios: 50, android: 60 })
const container = {
    backgroundColor: Colors.primary_green,
    height: buttonHeight,
    borderRadius: (buttonHeight / 2),
    elevation: 3,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: Colors.soft_grey,
    shadowOpacity: 0.85,
    shadowRadius: 2,
};
export default StyleSheet.create(getResponsiveStyle({
    container: {
        ...container,
        width: Platform.select({ ios: 280, android: 300 }),
    },
    fullContainer: {
        ...container,
        width: Platform.select({ ios: 320, android: 340 }),
    },
    text: {
        color: Colors.primary_white,
        fontFamily: Fonts.SEMIBOLD,
        fontSize: Platform.select({ ios: 14, android: 18 }),
        lineHeight: buttonHeight,
        textAlign: 'center'
    }
}));