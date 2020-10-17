/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import { mediaMaxWidth } from '../util';

export interface ITabItem {
    label: string,
    link: string
}

export default (props: { list: ITabItem[]}) => {
    return (
    <div css={{ 
        [mediaMaxWidth(768)]: { flexFlow: 'column' },
        textAlign: 'center', display: 'flex', justifyContent: 'center',  }}
        >
        {props.list.map((item, i) => {
            return (<div css={{ 
                [mediaMaxWidth(768)]: { padding: '10px' },
                padding: '20px' 
                }} key={i}>
                <a href={`#${item.link}`}>{item.label}</a>
            </div>);
        })}
    </div>);
}