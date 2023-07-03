import React from 'react';

import './styles.scss';
import { ColumnPageData } from '../../stores/DummyData';
import Recommended from '../../components/Recommended';
import MealHistory from '../../components/MealHistory';

const ColumnPage = () => {

  return (
    <div className='col-md-12 col-lg-12 col-sm-12 col-xs-12'>
      <div className="row col-10 offset-1">
        <Recommended />
        <MealHistory data={ColumnPageData}/>
      </div>
    </div>
  );
};

export default ColumnPage;