/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import CurrentMeetingPointsContainer from '../containers/CurrentMeetingPointsContainer';
import LiveContainer from '../containers/LiveContainer';
import PhotoGalleryContainer from '../containers/PhotoGalleryContainer';

export default () => {
    return (
    <div css={{ width: '100%', overflow: 'hidden' }}>
        <CurrentMeetingPointsContainer />
        {/* <div>
            <TransportationContainer />
        </div> */}
        <LiveContainer />
        <PhotoGalleryContainer />
        {/* <div>
            <OfficialNewsContainer />
        </div> */}
    </div>
    );
}