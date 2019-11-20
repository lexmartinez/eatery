import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../config/Constant';
import { getResponsiveStyle, Platform } from '../../config/Utilities';

export default StyleSheet.create(getResponsiveStyle({
   main: {
       flex: 1,
       justifyContent: 'center',
       marginHorizontal: 30,
   },
   inputContainer: {
       paddingBottom: 50,
       marginTop: 80
   },
   inputLine: {
       paddingVertical: Platform.select({ ios: 10, android: 15 })
   },
   buttonLine:{
       padding: 10,
       paddingTop: 30,
       alignItems: 'center'
   },
   title: {
       fontFamily: Fonts.BOLD,
       fontSize: Platform.select({ ios: 40, android: 40, iosx: 30 }),
       color: Colors.primary_grey,
       marginBottom: 10
   },
   subTitle: {
       fontFamily: Fonts.MEDIUM,
       fontSize: Platform.select({ iosx: 14, ios: 18, android: 18 }),
       color: Colors.secondary_grey
   },
   forgotLine: {
       marginTop: 5,
       alignItems: 'flex-end'
   },
   forgot: {
       padding: 10
   },
   forgotText: {
       fontFamily: Fonts.BOLD,
       fontSize: Platform.select({ iosx: 12, ios: 14, android: 16 }),
       color: Colors.primary_green,
       textAlign: 'right'
   },
   registerLine: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
   },
   registerText: {
    fontFamily: Fonts.MEDIUM,
    fontSize: Platform.select({ iosx: 12, ios: 14, android: 16 }),
    color: Colors.primary_grey
   },
   register: {
       marginLeft: Platform.select({ ios: 4, android: 6 })
   },
   registerButton: {
    fontFamily: Fonts.BOLD,
    fontSize: Platform.select({ iosx: 12, ios: 14, android: 16 }),
    color: Colors.primary_green
   },
   loginError: {
       fontFamily: Fonts.SEMIBOLD,
       fontSize: Platform.select({ iosx: 12, ios: 14, android: 16 }),
       color: Colors.primary_green,
       textAlign: 'center'
   }
}));