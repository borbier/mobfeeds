/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import logo from '../assets/logo.jpg';
import githubLogoWhite from '../assets/github-logo-white.png';
import { ITabItem } from './Tab';
import Tab from './Tab';
import { mediaMaxWidth } from '../util';

export default () => {
    return (
        <div css={{background: '#403949',
        color: '#FFF',}}>

            <div css={{
                    
                    padding: '15px',
                    display: 'flex', 
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <div>
                    <a href='/'>
                    <img src={logo} alt="หมุดคณะราษฎร์ 2563 ไงว้อย" css={{ width: '100px'}} />
                    </a>
                </div>

                <a href='/' css={{ 
                        [mediaMaxWidth(768)]: { width: '100%' },
                        color: '#FFF', padding: '0 10px', fontSize: '1.5em', fontWeight: 'bold', textTransform: 'uppercase', width: '20%'
                    }}>
                    <div css={{ marginBottom: '10px'}}>
                        <span>เพื่ออนาคตที่ดีกว่า</span>
                    </div>

                    <div>
                        <span>For the better future</span>
                    </div>
                    <div css={{ fontSize: '0.5em', margin: '20px 0', lineHeight: '1.5em'}}>
                        เว็บไซต์นี้จัดทำเพื่อรวบรวมข้อมูลข่าวสารสถานการณ์บ้านเมืองในปัจจุบัน เพื่อความโปร่งใสและความเป็นธรรมแก่ทุกฝ่าย เราไม่สนับสนุนความรุนแรงใดๆที่เกิดขึ้นทั้งสิ้น
                    </div>
                </a>
            </div>

            <div css={{ display: 'flex', alignItems: 'center', padding: '20px',justifyContent: 'center'}}>
                <div css={{ margin: '0 10px'}}>
                    <a href="https://github.com/AimeTPGM/mobfeeds">
                        <img src={githubLogoWhite} alt="ช่วยหน่อยนะ" css={{ width: '25px'}}  />
                    </a>
                </div>
                <div css={{ textAlign: 'left', fontSize: '10px'}}>
                you know how to code?
                <br />
                We need your help!
                </div>
            </div>
        
            <div>
                <Tab list={menu} />
            </div>
        </div>
    );
}

const menu: ITabItem[] = [
    {
        label: 'Home',
        link: '/'
    },
    {
        label: 'BTS/MRT Status',
        link: '/transport'
    },
    {
        label: 'Timeline',
        link: '/timeline'
    },
    {
        label: 'Mob Locations',
        link: '/moblocations'
    }
]