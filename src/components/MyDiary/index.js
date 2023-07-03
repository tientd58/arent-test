import React from 'react';
import moment from 'moment';

import './styles.scss';
import { ButtonPrimary } from '../Button';

export const MyDiary = ({
  data = [],
  onClickViewMore,
}) => {
  if (data.length === 0) {
    return (
      <div>
        <p>no diary data</p>
      </div>
    );
  }

  return (
    <div className='row diary-container'>
      {data.map((item) => (
        <div className='diary-item cursor'>
          <div className='diary-date'>
            <p>{moment(data.date).format('YYYY.MM.DD')}</p>
            <p>{moment(data.date).format('HH:mm')}</p>
          </div>
          <div className='diary-content'>
            <p>{item.title}</p>
            <p>{item.subTitle}</p>
          </div>
        </div>
      ))}
      <div className='button-center-container'>
        <ButtonPrimary
          text={'自分の日記をもっと見る'}
          onClick={onClickViewMore}
        />
      </div>
    </div>
  )
};
