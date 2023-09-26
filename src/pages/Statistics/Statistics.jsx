// import { Cell, Pie, PieChart } from "recharts";


// const Statistics = () => {

//     const allDonations = 12;

//     const collectDonations = JSON.parse(localStorage.getItem('donations'))?.length || 0;

//     const data =[
//         { name: 'total', value: allDonations, fill: '#FF444A' },
//         { name: 'added', value: collectDonations, fill: '#00C49F' },
//     ]
//     return (
//         <div className="mt-8">
//             <div className="flex justify-center items-center h-[65vh] px-16">
//             <PieChart width={330} height={250}>
//                 <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120}>
//                     {data.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={entry.fill}></Cell>
//                     ))}
//                 </Pie>
//             </PieChart>
//         </div>
//         </div>
//     );
// };

// export default Statistics;

import React from 'react';
import Chart from 'react-apexcharts';

const Statistics = () => {
  const allDonations = 12;
  const collectedDonations = JSON.parse(localStorage.getItem('donations'))?.length || 0;

  const chartData = [collectedDonations, allDonations - collectedDonations];

  const options = {
    labels: ['Your Donation', 'Total Donation'],
    colors: ['#00C49F', '#FF444A'],
    legend: {
      position: 'bottom',
    },
  };

  return (
    <React.Fragment>
      <div className='flex items-center justify-center h-[100vh] w-full'>
        <Chart
          type='pie'
          width={330}
          height={2500}
          series={chartData}
          options={options}
        />
      </div>
    </React.Fragment>
  );
}

export default Statistics;