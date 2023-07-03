import React from 'react';

import './styles.scss';
import MealItem from './MealItem';
import { ButtonPrimary } from '../Button';

const MealHistory = ({
  isMealHistory = false,
  data = [],
  onClickViewMore,
}) => {
  if (data.length === 0 && isMealHistory) {
    return (
      <div>
        <p>no meal history data</p>
      </div>
    );
  }
  if (data.length === 0 && !isMealHistory) {
    return (
      <div>
        <p>no post data</p>
      </div>
    );
  }

  return (
    <div className='row meal-history-container'>
      {data.map((item) => (
        <MealItem
          data={item}
          key={item.id}
          isMealHistory={isMealHistory}
        />
      ))}
      <div className='button-center-container'>
        <ButtonPrimary
          text={isMealHistory ? '記録をもっと見る' : 'コラムをもっと見る'}
          onClick={onClickViewMore}
        />
      </div>
    </div>
  )
};

export default MealHistory;
