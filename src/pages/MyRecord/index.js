import React from 'react';
import 'react-circular-progressbar/dist/styles.css';

import './styles.scss';
import { MyExerciseData, MyDiaryData } from '../../stores/DummyData';
import { Chart } from '../../components/Chart';
import EntryRecord from '../../components/EntryRecord';
import { MyDiary } from '../../components/MyDiary';

const MyRecord = () => {

  return (
    <div className='col-md-12 col-lg-12 col-sm-12 col-xs-12'>
      <div className="row col-10 offset-1">
        <EntryRecord />
        <Chart isSingle={false} />
        <div className='my-exercise-container'>
          <div className='scope-header'>
            <span>MY EXERCISE</span>
            <span>2021.05.21</span>
          </div>
          <div className='my-exercise-table'>
            {MyExerciseData.map((item) => (
              <div className='row col-12 my-exercise-table-row'>
                <div className='exercise-item col-lg-5 col-md-5 col-sm-10 col-xs-10'>
                  <ul>
                    <li>
                      <p>{item.exercise}</p>
                      <p>{item.caloBurned}kcal</p>
                    </li>
                  </ul>
                  <p className='time-exercise'>{item.time} min</p>
                </div>
                <div className='exercise-item col-lg-5 col-md-5 col-sm-10 col-xs-10'>
                  <ul>
                    <li>
                      <p>{item.exercise}</p>
                      <p>{item.caloBurned}kcal</p>
                    </li>
                  </ul>
                  <p className='time-exercise'>{item.time} min</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <MyDiary data={MyDiaryData} />
      </div>
    </div>
  );
};

export default MyRecord;