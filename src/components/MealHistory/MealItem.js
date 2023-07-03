import React from 'react';
import moment from 'moment';

import './styles.scss';

const MealItem = ({
  data,
  isMealHistory,
}) => {

  if (isMealHistory) {
    return (
      <div
        style={{
          backgroundImage: `url(${data.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
        }}
        className='meal-item'
      >
        <div className='item-date'>
          <span>{`${moment(data.date).format('MM.DD')}.${data.meal}`}</span>
        </div>
      </div>
    );
  }

  return (
    <div className='meal-item post-item'>
      <div
        style={{
          backgroundImage: `url(${data.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
        }}
        className='post-item-image'
      >
        <div className='item-date post-item-time'>
          <span>{moment(data.date).format('YYYY.MM.DD HH:mm')}</span>
        </div>
      </div>
      <div className='post-title'>
        <span>{data.title}</span><br />
        <span>{data.tags}</span>
      </div>
    </div>
  );
};

export default MealItem;
