/** @jsx jsx */
import { jsx, css, InterpolationWithTheme, Global } from '@emotion/core';
import React, { useState } from 'react';

export interface Hotline {
  name: string;
  tel: string;
  type: HotlineType;
}

export enum HotlineType {
  Hospital,
  Rescuer,
  Lawyer
}

export default (props: { items: Hotline[], pageSize?: number }) => {
  const [page, setPage] = useState<number>(0);
  const [searchString, setSearchString] = useState<string>('');
  const [currentSearchString, setCurrentSearchString] = useState<string>('');
  const [showType, setShowType] = useState<number>(-1);
  const [showData, setShowData] = useState<Hotline[]>(props.items);

  const pageSize = props.pageSize ? props.pageSize : 20;
  const maxPage = Math.ceil(showData.length / pageSize);

  const onTypeChange = (type: number) => {
    setPage(0);
    setShowType(type);
    setSearchString('');
    setCurrentSearchString('');
    setShowData(props.items.filter((item) => {
      if (type === -1) return true;

      return item.type === type;
    }));
  };

  const onSearch = () => {
    setSearchString(currentSearchString);
    if (currentSearchString.length > 0) {
      setShowData(props.items.filter((item) => {
        return item.name.search(currentSearchString) != -1 || item.tel.search(currentSearchString) != -1;
      }));
    } else {
      onTypeChange(-1);
    }
  };

  const getHotlineTypeLabel = (type: HotlineType) => {
    switch (type) {
      case HotlineType.Hospital:
        return 'โรงพยาบาล';
      case HotlineType.Lawyer:
        return 'ทนาย';
      case HotlineType.Rescuer:
        return 'กู้ภัย';
    }
  };

  const getPaginatedData = (items: Hotline[], pageSize: number, page: number) => {
    return items.slice(pageSize * page, pageSize * (page + 1));
  };

  const getPaginationButton = (maxPage: number, currentPage: number) => {
    const btn = [];
    for (let i = 0; i < maxPage; i++) {
      btn.push((
        <li className='page-item' key={i}>
          <a
            className={'page-link' + (currentPage == i ? ' active' : '')}
            onClick={setPage ? () => setPage(i) : () => { }}>
            {i + 1}
          </a>
        </li>
      ));
    }

    return btn;
  };

  const getTableData = () => {
    const items = getPaginatedData(showData, pageSize, page).map((item, i) => {
      return (
        <tr key={i}>
          <td>{getHotlineTypeLabel(item.type)}</td>
          <td>{item.name}</td>
          <td>{item.tel}</td>
        </tr>
      );
    });

    if (items.length > 0) {
      return items;
    } else {
      return (<tr><td colSpan={3}>ไม่มีผลลัพท์ของคำค้นหา <strong>{searchString}</strong></td></tr>);
    }
  };

  return (
    <div>
      <Global
        styles={css`
        .left {
          float: left;
        }

        .right {
          float: right;
        }

        .tableToolbox {
          width: 95vw;
          height: 35px;
          margin: auto auto;
          margin-bottom: 15px;
        }

        input, button {
          border: 1px solid #ccc;
          border-radius: .25rem;
          font-size: 12pt;
        }

        button {
          background: #fff;
          padding: .5rem .75rem;
          line-height: 1.25;
          cursor: pointer;
        }

        input {
          padding-left: .5rem;
          padding-right: .5rem;
        }

        button.active {
          background: #403949;
          border: 1px solid #403949;
          color: #fff;
        }

        .tableToolbox .left > button {
          height: 35px;
          margin-right: 5px;
        }

        .tableToolbox .right > button {
          height: 35px;
          border-radius: 0 .25rem .25rem 0;
          line-height: 1;
        }

        .tableToolbox .right > input {
          height: 31px;
          line-height: 1.25;
          border-right: 0;
          border-radius: .25rem 0 0 .25rem;
        }

        .table {
          width: 95vw;
          border-collapse:separate;
          border-spacing:0 5px;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin: auto auto;
          text-align: center;
          vertical-align: center;
        }
        
        .table > thead tr th{
          border-bottom: 1px solid #ccc; 
          border-collapse:separate; 
          border-spacing:5px 5px;
          padding: 5px;
        } 
        
        .table > tbody tr#first td {
          border-top: 3px solid #4d4d4d; 
          border-collapse:separate;
          border-spacing:5px 5px;
        }

        .pagination {
          display: -ms-flexbox;
          display: flex;
          padding-left: 0;
          list-style: none;
          border-radius: .25rem;
          -ms-flex-pack: center!important;
          justify-content: center!important;
        }

        .page-link {
          position: relative;
          display: block;
          padding: .5rem .75rem;
          margin-left: -1px;
          line-height: 1.25;
          color: #403949;
          background-color: #fff;
          border: 1px solid #dee2e6;
          cursor: pointer;
        }

        .page-item:first-of-type .page-link {
          margin-left: 0;
          border-top-left-radius: .25rem;
          border-bottom-left-radius: .25rem;
        }

        .page-item:last-child .page-link {
          border-top-right-radius: .25rem;
          border-bottom-right-radius: .25rem;
        }

        .page-link.active {
          border: 1px solid #403949;
          background-color: #403949;
          color: #fff;
        }

        @media (min-width: 768px) {
          .tableToolbox, .table {
            width: 75vw;
          }
        }

        @media (min-width: 992px) {
          .tableToolbox, .table {
            width: 60vw;
          }
        }
      `}
      />

      <div className='tableToolbox'>
        <div className='left'>
          <button
            className={showType === -1 ? 'active' : ''}
            onClick={() => onTypeChange(-1)}>ทั้งหมด</button>
          <button
            className={showType === 0 ? 'active' : ''}
            onClick={() => onTypeChange(0)}>โรงพยาบาล</button>
          <button
            className={showType === 1 ? 'active' : ''}
            onClick={() => onTypeChange(1)}>กู้ภัย</button>
          <button
            className={showType === 2 ? 'active' : ''}
            onClick={() => onTypeChange(2)}>ทนาย</button>
        </div>

        <div className='right'>
          <input
            type='text'
            placeholder='กรอกคำค้นหา'
            value={currentSearchString}
            onChange={(e) => setCurrentSearchString(e.currentTarget.value)} />
          <button
            onClick={() => onSearch()}>ค้นหา</button>
        </div>
      </div>

      <table className='table'>
        <thead>
          <tr>
            <th css={{ width: '20%' }}>ประเภท</th>
            <th css={{ width: '40%' }}>ชื่อ</th>
            <th css={{ width: '40%' }}>เบอร์โทร</th>
          </tr>
        </thead>
        <tbody>
          {getTableData()}
        </tbody>
      </table>

      <nav>
        <ul className='pagination'>
          <li className='page-item'><a className='page-link' onClick={() => {
            if (page - 1 >= 0) {
              setPage(page - 1);
            }
          }}>ย้อนกลับ</a></li>
          {getPaginationButton(maxPage, page)}
          <li className='page-item'><a className='page-link' onClick={() => {
            if (page + 1 < maxPage) {
              setPage(page + 1);
            }
          }}>ถัดไป</a></li>
        </ul>
      </nav>
    </div >
  );
};
