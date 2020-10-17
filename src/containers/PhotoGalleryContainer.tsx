/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

export default () => {
    return (<div className={'container'}>
        <h1>
            ประมวลภาพชุมนุม
        </h1>
        <div css={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
            {facebookPosts[0].embedCode}
        </div>
        
        
    </div>);
}

const facebookPosts = [
    {
        embedCode: (<div className="fb-post" data-href="https://www.facebook.com/permalink.php?story_fbid=3873571172687128&amp;id=100001028495019" data-show-text="true" data-width="300"><blockquote cite="https://www.facebook.com/permalink.php?story_fbid=3873571172687128&amp;id=100001028495019" className="fb-xfbml-parse-ignore"><p>โห ที่ลาดพร้าวเหรอ? 
        นึกว่าต่างประเทศ ทรงพลังมาก
        
        รูปจากทวิตนี้ครับ 👇👇👇https://twitter.com/JjptTer/status/1317431423372963841</p>โพสต์โดย <a href="https://www.facebook.com/people/&#xe1b;&#xe23;&#xe34;&#xe0d;&#xe0d;&#xe32;-&#xe2a;&#xe38;&#xe1b;&#xe31;&#xe19;&#xe42;&#xe19;/100001028495019">ปริญญา สุปันโน</a> เมื่อ&nbsp;<a href="https://www.facebook.com/permalink.php?story_fbid=3873571172687128&amp;id=100001028495019">วันเสาร์ที่ 17 ตุลาคม  2020</a></blockquote></div>)
    }
]