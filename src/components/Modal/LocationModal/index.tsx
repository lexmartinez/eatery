import React from 'react';
import I18n from '../../../config/i18n';
import { openSettings } from 'react-native-permissions';
import Modal from '../BaseModal';

const IMAGE_PATH = '../../../assets/images/location.png'
const LocationModal = () => {
    return <Modal title={I18n.t('location.title')} message={I18n.t('location.message')}
        button={I18n.t('location.button')} onAction={openSettings} image={require(IMAGE_PATH)}/>
};

export default LocationModal;