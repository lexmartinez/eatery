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
   avatarContainer: {
       alignItems: 'center',
       justifyContent: 'center',
       paddingVertical: 15,
       marginTop: Platform.select({ iosx: 10, ios: 20, android: 20 })
   },
   avatarInfo: {
       justifyContent: 'center',
       marginTop: 20
   },
   avatar: {
       height: Platform.select({ ios: 120, android: 120, iosx: 100 }),
       width: 120,
       borderRadius: Platform.select({ ios: 60, android: 60, iosx: 50 })
   },
   avatarTitle: {
       fontFamily: Fonts.BOLD,
       fontSize: 18,
       color: Colors.primary_grey,
       textAlign: 'center'
   },
   avatarSubtitle: {
       fontFamily: Fonts.SEMIBOLD,
       fontSize: Platform.select({ ios: 14, android: 16, iosx: 12 }),
       color: Colors.secondary_grey,
       textAlign: 'center'
   },
   infoContainer: {
       paddingVertical: 15,
       marginHorizontal: 20
   },
   infoLine: {
       marginBottom: 15
   },
   infoLabel: {
       fontFamily: Fonts.SEMIBOLD,
       color: Colors.secondary_grey,
       fontSize: Platform.select({ ios: 14, android: 16, iosx: 12 }),
   },
   buttonContainer: {
       paddingVertical: 20,
       marginHorizontal: 20,
       paddingBottom: 120
   },
   button: {
       flex: 1,
       marginBottom: 20,
       alignItems: 'center',
       justifyContent: 'center',
       height: buttonHeight,
       borderRadius: buttonHeight / 2,
       elevation: 3,
       shadowOffset: { width: 0, height: 1 },
       shadowColor: Colors.soft_grey,
       shadowOpacity: 0.85,
       shadowRadius: 2,
       backgroundColor: Colors.primary_red
   },
   buttonText: {
       fontFamily: Fonts.SEMIBOLD,
       fontSize: Platform.select({ android: 16, ios: 14 }),
       color: Colors.primary_white
   },
   mainEmpty: {
       flex: 1,
       justifyContent: 'center',
       marginHorizontal: 50,
       paddingTop: Platform.select({ ios: 150, android: 150, iosx: 80 })
   },
}));