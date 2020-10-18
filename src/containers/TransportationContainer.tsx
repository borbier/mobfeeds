/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import React from 'react'
import UnderDevelopment from '../components/UnderDevelopment'

export default () => {
    return (
        <div className={'container'}>
            <h1>
                สถานะขนส่งสาธารณะ
            </h1>
            <div>Last Update: 17 ต.ค. 23.31 น.</div>
            <div css={{ marginTop: '50px'}}>
                <div>
                    BTS
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )

}

const TRAIN_STATUS = {
    OPEN: 'OPEN',
    CLOSED: 'CLOSED'
}

interface ITrainData {
    type: string;
    lineName: string;
    stations: IStationInfo[]
}

interface IStationInfo {
    name: string,
    status: string;
}

const mrtData: ITrainData[] = [
    {
        type: 'MRT',
        lineName: 'สีน้ำเงิน',
        stations: [
            {
                name: 'ท่าพระ',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'จรัญฯ 13',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ไฟฉาย',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'บางขุนนนท์',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'บางยี่ขัน',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'สิรินธร',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'บางพลัด',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'บางอ้อ',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'บางโพ',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'เตาปูน',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'บางซื่อ',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'กำแพงเพชร',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'สวนจตุจักร',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'พหลโยธิน',
                status: TRAIN_STATUS.CLOSED
            }, {
                name: 'ลาดพร้าว',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'รัชดาภิเษก',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'สุทธิสาร',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ห้วยขวาง',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ศูนย์วัฒนธรรมแห่งประเทศไทย',
                status: TRAIN_STATUS.CLOSED
            },

            {
                name: 'พระราม 9',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'เพชรบุรี',
                status: TRAIN_STATUS.CLOSED
            },

            {
                name: 'สุขุมวิท',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ศูนย์การประชุมแห่งชาติสิริกิติ์',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'คลองเตย',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ลุมพินี',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'สีลม',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'สามย่าน',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'หัวลำโพง',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'วัดมังกร',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'สามยอด',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'สนามไชย',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'อิสรภาพ',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'บางไผ่',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'บางหว้า',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'เพชรเกษม 48',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ภาษีเจริญ',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'บางแค',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'หลักสอง',
                status: TRAIN_STATUS.CLOSED
            },


        ]
    },
    {
        type: 'MRT',
        lineName: 'สีม่วง',
        stations: [
            {
                name: 'คลองบางไผ่',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ตลาดบางใหญ่',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'สามแยกบางใหญ่',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'บางพลู',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'บางรักใหญ่',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'บางรักน้อย-ท่าอิฐ',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ไทรม้า',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'สะพานพระนั่งเกล้า',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'แยกนนทบุรี 1',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'บางกระสอ',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ศูนย์ราชการนนทบุรี',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'กระทรวงสาธารณสุข',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'แยกติวานนท์',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'วงศ์สว่าง',
                status: TRAIN_STATUS.CLOSED
            }, {
                name: 'บางซ่อน',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'เตาปูน',
                status: TRAIN_STATUS.CLOSED
            },
        ]
    }
]

const btsData: ITrainData[] = [
    {
        type: 'BTS',
        lineName: 'สุขุมวิท',
        stations: [
            {
                name: 'วัดพระศรีมหาธาตุ',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'กรมทหารราบที่ 11',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'บางบัว',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'กรมป่าไม้',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'มหาวิทยาลัยเกษตรศาสตร์',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'เสนานิคม',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'รัชโยธิน',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'พหลโยธิน 24',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ห้าแยกลาดพร้าว',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'หมอชิต',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'สะพานควาย',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'อารีย์',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'สนามเป้า',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'อนุสาวรีย์ชัยสมรภูมิ',
                status: TRAIN_STATUS.CLOSED
            }, {
                name: 'พญาไท',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ราชเทวี',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'สยาม',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ชิดลม',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'เพลินจิต',
                status: TRAIN_STATUS.CLOSED
            },

            {
                name: 'นานา',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'อโศก',
                status: TRAIN_STATUS.CLOSED
            },

            {
                name: 'พร้อมพงษ์',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ทองหล่อ',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'เอกมัย',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'พระโขนง',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'อ่อนนุช',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'บางจาก',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ปุณณวิถี',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'อุดมสุข',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'บางนา',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'แบริ่ง',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'สำโรง',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ปู่เจ้า',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ช้างเอราวัณ',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'โรงเรียนนายเรือ',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ปากน้ำ',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ศรีนครินทร์',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'แพรกษา',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'สายลวด',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'เคหะฯ',
                status: TRAIN_STATUS.CLOSED
            },
        ]
    },
    {
        type: 'BTS',
        lineName: 'สีลม',
        stations: [
            {
                name: 'สนามกีฬาแห่งชาติ',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'สยาม',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ราชดำริ',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ศาลาแดง',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ช่องนนทรี',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'สุรศักดิ์',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'สะพานตากสิน',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'กรุงธนบุรี',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'วงเวียนใหญ่',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'โพธิ์นิมิตร',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ตลาดพลู',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'วุฒากาศ',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'บางหว้า',
                status: TRAIN_STATUS.CLOSED
            },
        ]
    },
]
