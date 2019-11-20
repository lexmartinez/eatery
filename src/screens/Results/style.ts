import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../config/Constant';
import { getResponsiveStyle, Platform } from '../../config/Utilities';

export default StyleSheet.create(getResponsiveStyle({
   main: {
       flex: 1,
       paddingTop: Platform.select({ iosx: 80, ios: 40, android: 50 }),
       marginHorizontal: 10,
       paddingBottom: Platform.select({ iosx: 120, ios: 0, android: 80 })
   },
   card: {
       backgroundColor: Colors.primary_white,
       elevation: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: Colors.secondary_grey,
        shadowOpacity: 0.4,
        borderTopWidth: 0,
        paddingVertical: 20,
        marginVertical: 10,
        paddingHorizontal: 10
   },
   title:{
       fontFamily: Fonts.SEMIBOLD,
       fontSize: Platform.select({ ios: 16, android: 18 }),
       color: Colors.primary_grey
   },
   address: {
       fontFamily: Fonts.MEDIUM,
       fontSize: Platform.select({ ios: 14, android: 16 }),
       color: Colors.primary_grey
   },
   mainEmpty: {
       flex: 1,
       justifyContent: 'center',
       marginHorizontal: 50,
       paddingTop: Platform.select({ ios: 150, android: 150, iosx: 80 })
   },
}));