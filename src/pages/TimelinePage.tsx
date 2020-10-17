/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import UnderDevelopment from '../components/UnderDevelopment';

export default () => {
    return (
    <div css={{ width: '100%', overflow: 'hidden', textAlign: 'center' }}>
        <UnderDevelopment />
    </div>
    );
}