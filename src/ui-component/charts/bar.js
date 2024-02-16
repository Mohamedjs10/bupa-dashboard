import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js

const labels = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Fully Rounded',
      data: [10, 20, 200, 270],
      borderColor: '#0079C8',
      backgroundColor: '#0079C8',
      borderWidth: 0,
      borderRadius: 10,
      borderSkipped: false,
      // barThickness:40,
      categoryPercentage: 1, // Set the category percentage to 1 to occupy the full available width
      barPercentage: 0.8 // Adjust the bar percentage to ensure spacing between bars
    }
  ]
};
const Bar = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // Create the chart
      new Chart(ctx, {
        type: 'bar', // Set the chart type
        data: data, // Use the data object you provided
        options: {
          // You can add additional chart options here
        }
      });
    }
  }, []);

  return (
    <div>
      <canvas ref={chartRef}></canvas> {/* Canvas element for rendering the chart */}
    </div>
  );
};

export default Bar;
