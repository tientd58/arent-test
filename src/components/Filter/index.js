import React from 'react';

import './styles.scss';
import { images } from '../../assets/images';

const FilterButton = ({
  onSelect
}) => {
  return (
    <div className='row filter-button-container'>
      <div className='col-3' onClick={onSelect}>
        <img src={images.componentMorning} alt="button morning filter" className='cursor'/>
      </div>
      <div className='col-3' onClick={onSelect}>
        <img src={images.componentLunch} alt="button lunch filter" className='cursor'/>
      </div>
      <div className='col-3' onClick={onSelect}>
        <img src={images.componentDinner} alt="button dinner filter" className='cursor'/>
      </div>
      <div className='col-3' onClick={onSelect}>
        <img src={images.componentSnack} alt="button snack filter" className='cursor'/>
      </div>
    </div>
  );
};

export default FilterButton;