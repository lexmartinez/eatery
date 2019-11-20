import React from 'react';
import I18n from '../../../config/i18n';
import Modal from '../BaseModal';

const IMAGE_PATH = '../../../assets/images/error.png'
const ErrorModal = (props: ErrorModalProps) => {
    const { onAction = () => {}, button = I18n.t('error.button') } = { ...props };
    return <Modal title={I18n.t('error.title')} message={I18n.t('error.message')}
        button={button} onAction={onAction} image={require(IMAGE_PATH)}/>
};

export default ErrorModal;