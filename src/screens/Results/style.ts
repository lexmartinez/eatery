import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../config/Constant';
import { getResponsiveStyle, Platform } from '../../config/Utilities';

const buttonHeight = Platform.select({ ios: 40, android: 50 })

export default StyleSheet.create(getResponsiveStyle({
   main: {
       flex: 1,
       paddingTop: Platform.select({ iosx: 80, ios: 40, android: 50 }),
       marginHorizontal: 30,
       paddingBottom: Platform.select({ iosx: 120, ios: 0, android: 80 })
   },
   mainEmpty: {
       flex: 1,
       justifyContent: 'center',
       marginHorizontal: 50,
       paddingTop: Platform.select({ ios: 150, android: 150, iosx: 80 })
   },
}));