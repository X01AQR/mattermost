// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import styled from 'styled-components';

const ClasseraLogoContainer = styled.div`
    margin-left: 8px;
`;

const ClasseraImage = () => {
    return (
        <ClasseraLogoContainer>
            <img
                src={'https://v14-cdn.classera.com/img/classera_logo_white.png?93c14775-d6a8-51df-97b2-7553b96c8787'}
                alt={'Classera Logo'}
                width={'112'}
                height={'30'}
            />
        </ClasseraLogoContainer>
    );
};

export default ClasseraImage;
