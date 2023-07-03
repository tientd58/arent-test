import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import './styles.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'none',
    },
  },
};

const labels = ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Body weight',
      fontColor: '#fff',
      data: labels.map(() => Math.floor(Math.random() * 10) + 1),
      borderColor: '#8FE9D0',
      backgroundColor: '#8FE9D0',
    },
    {
      label: 'Body fat',
      data: labels.map(() => Math.floor(Math.random() * 10) + 1),
      borderColor: '#FFCC21',
      backgroundColor: '#FFCC21',
    },
  ],
  backgroundColor: '#000'
};

export const Chart = ({isSingle = true, customStyles = {}}) => {
  return (
    <div className='chart-body-record' style={customStyles}>
      {!isSingle && (
        <div className='scope-header'>
          <span>BODY RECORD</span>
          <span>2021.05.21</span>
        </div>
      )}
      <div className={isSingle ? 'col-12' : 'col-12 chart-body'}>
        <Line options={options} data={data} />
      </div>
      {!isSingle && (
        <div className='options-chart'>
          <div className='cursor'><span>日</span></div>
          <div className='cursor'><span>週</span></div>
          <div className='cursor'><span>月</span></div>
          <div className='cursor'><span>年</span></div>
        </div>
      )}
    </div>
  );
}
