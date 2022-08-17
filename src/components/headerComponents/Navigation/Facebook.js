import React from 'react';
import { Images } from '../../../functionalityAndStyling/headerImages/Images';
import { styles } from '../../../functionalityAndStyling/styles';

const Facebook = () => {
    return (
        <span style={styles.header.facebook}>
            <img src={Images.facebook} alt="" />
        </span>
    )
}

export default Facebook