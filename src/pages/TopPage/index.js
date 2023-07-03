import React, { useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from 'react-redux';
import {CircularProgressbarWithChildren, buildStyles} from 'react-circular-progressbar';

import './styles.scss';
import { Chart } from '../../components/Chart';
import { images } from '../../assets/images';
import { Spinner } from '../../components/Spinner';
import FilterButton from '../../components/Filter';
import MealHistory from '../../components/MealHistory';
import { useTopPage } from '../../hooks/useTopPage';
import { getMealHistorySelector, getFetchingSelector } from '../../stores/TopPage/TopPageSelectors';

const TopPage = () => {
  const { handleFetchMealHistory } = useTopPage();
  const isFetching = useSelector(getFetchingSelector);
  const mealHistory = useSelector(getMealHistorySelector);
  console.log('mealHistory: ', mealHistory);

  useEffect(() => {
    handleFetchMealHistory();
  }, [handleFetchMealHistory]);

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <div className='col-md-12 col-lg-12 col-sm-12 col-xs-12'>
      <div className='row'>
        <div
          className='col-md-5 col-lg-5 col-sm-5 col-xs-12'
          style={{
            backgroundImage: `url(${images.d01})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            padding: '70px',
          }}
        >
          <div className='circular-progressbar-container'>
            <CircularProgressbarWithChildren
              value={70}
              strokeWidth={2}
              styles={buildStyles({
                pathColor: '#FFFFFF',
                trailColor: 'transparent',
              })}
            >
              <span>{'05/21 '}<span>{' 70%'}</span></span>
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className='col-md-7 col-lg-7 col-sm-7 col-xs-12 chart'>
          <Chart
            customStyles={{
              backgroundColor: '#2e2e2e'
            }}
          />
        </div>
      </div>
      <div className='col-md-6 col-lg-6 col-sm-8 col-xs-8 offset-md-3 offset-lg-3 offset-sm-2 offset-xs-2'>
        <FilterButton />
      </div>
      <div className="row col-10 offset-1">
        <MealHistory data={mealHistory} isMealHistory/>
      </div>
    </div>
  );
};

export default TopPage;