import React from 'react';

import './styles.scss';
import { images } from '../../assets/images';

export const EntryRecordItem = ({
  title = '',
  subTitle = '',
  image,
  onClick,
}) => {
  return (
    <div className='cursor entry-record-item' onClick={onClick}>
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className='entry-record-item-image'
      >
        <div className='col-12 entry-record-item-content'>
          <span>{title}</span>
          <div className='col-7 content-subtitle'>
            <span>{subTitle}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const EntryRecord = ({onClick}) => {
  return (
    <div className='row entry-record'>
      <EntryRecordItem
        title='BODY RECORD'
        subTitle='自分のカラダの記録'
        image={images.myRecommend1}
        onClick={onClick}
      />
      <EntryRecordItem
        title='MY EXERCISE'
        subTitle='自分の運動の記録'
        image={images.myRecommend2}
        onClick={onClick}
      />
      <EntryRecordItem
        title='BODY DIARY'
        subTitle='自分の日記'
        image={images.myRecommend3}
        onClick={onClick}
      />
    </div>
  )
};

export default EntryRecord;
