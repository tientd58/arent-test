import React from 'react';

import './styles.scss';

const Recommended = () => {
  const renderItem = (title, subTitle, onClick = null) => (
    <div className='item cursor' onClick={onClick}>
      <p>{title}</p>
      <div className='item-line col-3' />
      <p>{subTitle}</p>
    </div>
  );

  return (
    <div className='row list-container'>
      {renderItem('RECOMMENDED COLUMN', 'オススメ')}
      {renderItem('RECOMMENDED DIET', 'ダイエット')}
      {renderItem('RECOMMENDED BEAUTY', '美容')}
      {renderItem('RECOMMENDED HEALTH', '健康')}
    </div>
  )
};

export default Recommended;
