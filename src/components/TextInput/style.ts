import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../config/Constant';
import { getResponsiveStyle, Platform } from '../../config/Utilities';

export default StyleSheet.create(getResponsiveStyle({
   input: {
       fontFamily: Fonts.MEDIUM,
       color: Colors.primary_grey,
       fontSize: Platform.select({ ios: 16, android: 18, iosx: 14 }),
       borderBottomWidth: 0.7,
       borderBottomColor: Colors.primary_green,
       marginTop: Platform.select({ ios: 5, android: 0, iosx: 5 }),
       paddingVertical: 6
   }
}));