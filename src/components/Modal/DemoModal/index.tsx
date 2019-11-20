import React from 'react';
import I18n from '../../../config/i18n';
import Modal from '../BaseModal';

const IMAGE_PATH = '../../../assets/images/demo.png'
const DemoModal = () => {
    return <Modal title={I18n.t('demo.title')} message={I18n.t('demo.message')}
        button={I18n.t('error.button')} image={require(IMAGE_PATH)}/>
};

export default DemoModal;