import React from 'react';

const ContactPopup = ({showPopup}) => {

    function closeBox(){
        '';
    }

    return (
        <div className={`contact-popup ${showPopup ? 'show' : ''}`}>
            <div>
                Bericht verzonden
            </div>
        </div>
    );

};

export default ContactPopup;
