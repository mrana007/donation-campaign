import React from 'react';
import Chart from 'react-apexcharts';

const Statistics = () => {
  const allDonations = 12;
  const collectedDonations = JSON.parse(localStorage.getItem('donations'))?.length || 0;

  const chartData = [collectedDonations, allDonations - collectedDonations];

  const options = {
    labels: ['Your Donation', 'Total Donation',],
    colors: ['#00C49F', '#FF444A'],
    legend: {
      position: 'bottom',
    },
  };

  return (
    <React.Fragment>
      <div className='flex items-center justify-center h-[70vh] w-full pt-10'>
        <Chart
          type='pie'
          width={330}
          height={400}
          series={chartData}
          options={options}
        />
      </div>
    </React.Fragment>
  );
}

export default Statistics;