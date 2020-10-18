/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import MobMap from '../components/MobMap';

export default () => {
    return (
    <div css={{ width: '100%', overflow: 'hidden', textAlign: 'center' }}>
        <MobMap mobLocations={mobLocations} />
    </div>
    );
}

const mobLocations = [
    {
        coord: { lat: 13.7379166, lng: 100.5255449 },
        description: 'มอบสามนิ้ว 1 |||'
    }, {
        coord: { lat: 13.74494306000918, lng: 100.54019562460562 },
        description: 'มอบสามนิ้ว 2 |||'
    }
]