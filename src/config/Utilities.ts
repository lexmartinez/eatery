import normalize from 'react-native-normalize';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { Platform as RNPlatform } from 'react-native';
import { check, request, RESULTS } from 'react-native-permissions';

export const Platform = {
    select: (obj: any) => {
        const { ios = {}, iosx = null, android = {} } = { ...obj }
        return RNPlatform.select({ android, ios: !!iosx ? ifIphoneX(iosx, ios) : ios })
    }
};

export const getResponsiveStyle = (style: any) => {
    const responsive = { ...style };
    const mappeables: any = {
        height: 'height',
        width: 'width',
        elevation: 'height',
        shadowRadius: 'height',
        marginTop: 'height',
        marginLeft: 'width',
        marginBottom: 'height',
        marginHorizontal: 'width',
        paddingTop: 'height',
        paddingBottom: 'height',
        paddingVertical: 'height',
        paddingHorizontal: 'width',
        borderRadius: 'height',
        fontSize: 'height',
        lineHeight: 'height',
        borderTopRightRadius: 'height',
        borderTopLeftRadius: 'height'
    };
    Object.keys(responsive).map((prop: string) => {
        if (typeof responsive[prop] === 'object') {
            responsive[prop] = getResponsiveStyle(style[prop]);
        } else {
            if (Object.keys(mappeables).includes(prop)) {
                responsive[prop] = normalize(style[prop], mappeables[prop]);
            } else {
                responsive[prop] = style[prop];
            }
        }
    });
    return responsive;
};

export const checkPermission = async (permissionObj: any, onGranted?: any, onBlocked?: any) => {
    const permission: any = RNPlatform.select(permissionObj);
    try {
        let granted: any = await check(permission);
        if (granted === RESULTS.DENIED) {
            granted = await request(permission);
        }
        if (granted === RESULTS.GRANTED && !!onGranted) {
            onGranted();
        }
        if (granted === RESULTS.BLOCKED && !!onBlocked) {
            onBlocked();
        }
    } catch (err) {
        console.log(err);
    }
};

export const labelize = (text: string) => `${text}:`;
export const isEmail = (email: string) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);