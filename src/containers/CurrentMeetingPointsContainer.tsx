/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

export default () => {
    return (<div className={'container'}>
        <h1>
            จุดรวมพล
        </h1>
        <div css={{ textAlign: 'center' }}>
            {meetingPoints.date}
        </div>
        <div css={{ margin: '20px', display: 'flex',  justifyContent: 'center' }}>
            {meetingPoints.places.map(item => {
                return (<div css={{ display: 'flex', justifyContent: 'center'}}>
                    <div css={{ paddingRight: '20px', fontWeight: 'bold' }}>
                        {item.city}
                        </div>
                        <div css={{ flex: 2 }}>
                            {item.points.map(point => {
                                return (<div>
                                    {point}
                                </div>)
                            })}
                        </div>
                </div>);
            })}
        </div>
        
        
    </div>);
}

const meetingPoints = 
    {
        date: '17 ตุลาคม 2563',
        places: [ 
            {
                city: 'กรุงเทพฯ',
                points: [
                    'ห้าแยกลาดพร้าว',
                    'บางนา-อุดมสุข',
                    'วงเวียนใหญ่'
                ]
            }
        ]
    }
