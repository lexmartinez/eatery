import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../config/Constant';
import { getResponsiveStyle, Platform } from '../../config/Utilities';

const buttonHeight = Platform.select({ ios: 50, android: 60 });

const responsive = {...getResponsiveStyle({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30
    },
    inputButton: {
        backgroundColor: Colors.primary_white,
        height: buttonHeight,
        width: Platform.select({ ios: 320, android: 340 }),
        borderRadius: (buttonHeight / 2),
        flexDirection: 'row'
    },
    cityButton: {
        height: buttonHeight,
        paddingLeft: 30,
        flexGrow: 1
    },
    cityText: {
        fontFamily: Fonts.SEMIBOLD,
        fontSize: Platform.select({ ios: 14, android: 18 }),
        color: Colors.secondary_grey,
        height: buttonHeight
    },
    searchButton: {
        height: buttonHeight,
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    nearButton: {
        flexDirection: 'row',
        marginTop: 20
    },
    nearText: {
        fontFamily: Fonts.SEMIBOLD,
        fontSize: Platform.select({ ios: 14, android: 18 }),
        color: Colors.primary_white,
        marginLeft: Platform.select({ ios: 4, android: 6 })
    }
 })}


export default StyleSheet.create({
    ...responsive,
    background: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});